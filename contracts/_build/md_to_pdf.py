#!/usr/bin/env python3
"""Convert each .md file in contracts/ to a styled, print-ready PDF via Chrome headless.

Output: contracts/pdf/<name>.pdf
"""
from __future__ import annotations
import subprocess
import sys
import tempfile
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent  # contracts/
PDF_DIR = ROOT / "pdf"
PDF_DIR.mkdir(exist_ok=True)

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CSS = """
@page {
  size: A4;
  margin: 22mm 18mm 22mm 18mm;
}
* { box-sizing: border-box; }
html, body {
  font-family: "Helvetica Neue", "Arial", "Liberation Sans", sans-serif;
  font-size: 10.5pt;
  line-height: 1.55;
  color: #1a1a1a;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 18pt;
  font-weight: 700;
  text-align: center;
  margin: 0 0 4pt;
  letter-spacing: 0.02em;
}
h2 {
  font-size: 12.5pt;
  font-weight: 700;
  margin: 18pt 0 6pt;
  border-bottom: 0.5pt solid #888;
  padding-bottom: 3pt;
  page-break-after: avoid;
}
h3 {
  font-size: 11pt;
  font-weight: 600;
  margin: 12pt 0 4pt;
  page-break-after: avoid;
}
p { margin: 4pt 0; text-align: justify; }
ul, ol { margin: 4pt 0 6pt 0; padding-left: 18pt; }
li { margin-bottom: 2pt; }
strong { font-weight: 700; }
em { font-style: italic; }
code {
  font-family: "SF Mono", Menlo, Consolas, monospace;
  font-size: 9pt;
  background: #f3f3f3;
  padding: 1pt 3pt;
  border-radius: 2pt;
}
pre {
  background: #f5f5f5;
  padding: 6pt 8pt;
  border-radius: 3pt;
  font-size: 9pt;
  overflow-x: auto;
  page-break-inside: avoid;
}
hr {
  border: 0;
  border-top: 0.5pt solid #bbb;
  margin: 12pt 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 6pt 0 10pt;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
th, td {
  border: 0.4pt solid #555;
  padding: 4pt 6pt;
  text-align: left;
  vertical-align: top;
}
th {
  background: #e8e8e8;
  font-weight: 700;
}
a { color: #000; text-decoration: underline; }
blockquote {
  border-left: 2pt solid #888;
  padding-left: 8pt;
  color: #333;
  font-style: italic;
  margin: 6pt 0;
}
/* Signature row: spread columns */
table:last-of-type td, table:last-of-type th { vertical-align: bottom; }
"""

HTML_TEMPLATE = """<!doctype html>
<html lang="bg">
<head>
<meta charset="utf-8" />
<title>{title}</title>
<style>{css}</style>
</head>
<body>
{body}
</body>
</html>
"""


def md_file_to_html(md_path: Path) -> str:
    text = md_path.read_text(encoding="utf-8")
    body = markdown.markdown(
        text,
        extensions=["extra", "tables", "sane_lists"],
        output_format="html5",
    )
    title = md_path.stem
    return HTML_TEMPLATE.format(title=title, css=CSS, body=body)


def html_to_pdf(html: str, pdf_path: Path) -> None:
    with tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8") as tmp:
        tmp.write(html)
        tmp_path = Path(tmp.name)
    try:
        cmd = [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            "--virtual-time-budget=2000",
            f"file://{tmp_path}",
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0:
            print(f"[chrome stderr] {result.stderr[:400]}", file=sys.stderr)
            raise RuntimeError(f"Chrome failed for {pdf_path.name}")
    finally:
        tmp_path.unlink(missing_ok=True)


def main() -> int:
    md_files = sorted(p for p in ROOT.glob("*.md") if not p.name.startswith("_"))
    if not md_files:
        print("No .md files found in", ROOT)
        return 1
    for md in md_files:
        pdf = PDF_DIR / f"{md.stem}.pdf"
        print(f"  {md.name}  →  pdf/{pdf.name}")
        html = md_file_to_html(md)
        html_to_pdf(html, pdf)
    print(f"\nDone. {len(md_files)} PDFs in {PDF_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
