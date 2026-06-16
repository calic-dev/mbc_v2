from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

pdfmetrics.registerFont(TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

WINE = colors.HexColor("#6a1b2a")
HEADBG = colors.HexColor("#f3e3d3")
ALT = colors.HexColor("#faf6f1")
LINE = colors.HexColor("#cccccc")

styles = getSampleStyleSheet()
h1 = ParagraphStyle("h1", parent=styles["Title"], fontName="DejaVu-Bold",
                    textColor=WINE, fontSize=22, alignment=TA_CENTER, spaceAfter=2)
sub = ParagraphStyle("sub", parent=styles["Normal"], fontName="DejaVu",
                     textColor=colors.grey, fontSize=11, alignment=TA_CENTER, spaceAfter=18)
h2 = ParagraphStyle("h2", parent=styles["Heading2"], fontName="DejaVu-Bold",
                    textColor=WINE, fontSize=14, spaceBefore=14, spaceAfter=4)

data = {
    "Sokovi": [["1", "Senzacija", "2 l", "3 paketa"],
               ["2", "Juicy Sok 100% naranča", "1 l", "30 litara"],
               ["3", "Juicy Sok 100% jabuka", "1 l", "10 litara"]],
    "Pivo": [["4", "Heineken pivo", "0,4 l", "5 gajbi"],
             ["5", "Žuja pivo", "0,5 l", "5 gajbi"]],
    "Vino (Andrija)": [["6", "Andrija Graševina", "0,7 l", "10 kartona"],
                       ["7", "Andrija Blatina", "0,7 l", "4 kartona"],
                       ["8", "Andrija Žilavka", "0,7 l", "4 kartona"]],
    "Žestoko": [["9", "Jack Daniel's", "0,7 l", "3 paketa"],
                ["10", "Jäger", "0,7 l", "3 paketa"],
                ["11", "Gin Bombay", "0,7 l", "5 boca"],
                ["12", "Pelinkovac Antique", "0,7 l ili 1 l", "3 paketa"]],
    "Voda": [["13", "Kisela voda", "2 l", "5 paketa"],
             ["14", "Jana voda", "0,5 l", "10 paketa"]],
    "Gazirano": [["15", "Kola", "2 l", "7 paketa"],
                 ["16", "Fanta", "2 l", "5 paketa"]],
}

doc = SimpleDocTemplate("/home/user/mbc_v2/popis-pica-za-vjencanje.pdf", pagesize=A4,
                        topMargin=22*mm, bottomMargin=18*mm,
                        leftMargin=20*mm, rightMargin=20*mm)
elems = [Paragraph("Popis pića za vjenčanje", h1),
         Paragraph("Popis pića i količina", sub)]

col_w = [12*mm, 75*mm, 35*mm, 38*mm]
for cat, rows in data.items():
    elems.append(Paragraph(cat, h2))
    table_data = [["#", "Stavka", "Pakiranje", "Količina"]] + rows
    t = Table(table_data, colWidths=col_w, hAlign="LEFT")
    style = [
        ("FONTNAME", (0, 0), (-1, -1), "DejaVu"),
        ("FONTNAME", (0, 0), (-1, 0), "DejaVu-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("TEXTCOLOR", (0, 0), (-1, 0), WINE),
        ("BACKGROUND", (0, 0), (-1, 0), HEADBG),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
    ]
    for i in range(1, len(table_data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), ALT))
    t.setStyle(TableStyle(style))
    elems.append(t)

doc.build(elems)
print("PDF created")
