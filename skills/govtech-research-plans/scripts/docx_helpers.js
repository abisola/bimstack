// GovTech Barbados research-plan docx helpers.
// Copy next to your build script: const H = require('./docx_helpers.js');
const {
  Document, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, AlignmentType, LevelFormat,
} = require('docx');

const NAVY = '1F3B57';
const NOTE_GREY = 'F2F2F2';
const HEAD_GREY = 'D9E2EC';

const p = (text, opts = {}) => new Paragraph({
  children: [new TextRun({ text, bold: opts.bold, italics: opts.italics, size: opts.size || 22 })],
  spacing: { after: opts.after ?? 120 },
});

const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: t, bold: true })], spacing: { before: 320, after: 160 } });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: t, bold: true })], spacing: { before: 260, after: 140 } });
const h3 = t => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: t, bold: true })], spacing: { before: 200, after: 100 } });

const bullet = (t, opts = {}) => new Paragraph({
  children: [new TextRun({ text: t, bold: opts.bold, italics: opts.italics, size: 22 })],
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: 80 },
});

// Italic scripted facilitator speech
const script = t => new Paragraph({
  children: [new TextRun({ text: t, italics: true, size: 22 })],
  indent: { left: 360 },
  spacing: { after: 120 },
});

// Grey facilitator-note box (single-cell table). lines: array of strings.
const facNote = (lines) => new Table({
  width: { size: 9360, type: WidthType.DXA },
  columnWidths: [9360],
  rows: [new TableRow({
    children: [new TableCell({
      width: { size: 9360, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: NOTE_GREY },
      margins: { top: 120, bottom: 120, left: 160, right: 160 },
      children: lines.map((l, i) => new Paragraph({
        children: [
          ...(i === 0 ? [new TextRun({ text: 'Facilitator note: ', bold: true, size: 22 })] : []),
          new TextRun({ text: l, size: 22 }),
        ],
        spacing: { after: i === lines.length - 1 ? 0 : 80 },
      })),
    })],
  })],
});

const spacer = () => new Paragraph({ children: [], spacing: { after: 60 } });

// Table: headers = array of strings; rows = array of arrays of strings (or arrays of strings for multi-para cells);
// widths = DXA per column, sum ~9360 for US Letter with 1" margins.
const mkTable = (headers, rows, widths) => {
  const total = widths.reduce((a, b) => a + b, 0);
  const mkRow = (cells, isHead) => new TableRow({
    children: cells.map((t, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: isHead ? { type: ShadingType.CLEAR, fill: HEAD_GREY } : undefined,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: (Array.isArray(t) ? t : [t]).map(x => new Paragraph({
        children: [new TextRun({ text: x, bold: isHead, size: 20 })],
        spacing: { after: 0 },
      })),
    })),
  });
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: [mkRow(headers, true), ...rows.map(r => mkRow(r, false))],
  });
};

// Wrap children in a full Document with house style + title block.
const buildDoc = (children, { title, subtitle, dateline }) => new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    }],
  },
  styles: {
    default: { document: { run: { font: 'Calibri', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, color: NAVY, font: 'Calibri' } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: NAVY, font: 'Calibri' } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 23, bold: true, color: '333333', font: 'Calibri' } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 }, // US Letter
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children: [
      new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 40, color: NAVY })], spacing: { after: 100 } }),
      new Paragraph({ children: [new TextRun({ text: subtitle, size: 28, color: '555555' })], spacing: { after: 60 } }),
      new Paragraph({ children: [new TextRun({ text: dateline, size: 20, italics: true, color: '777777' })], spacing: { after: 300 } }),
      ...children,
    ],
  }],
});

module.exports = { p, h1, h2, h3, bullet, script, facNote, spacer, mkTable, buildDoc, NAVY, NOTE_GREY, HEAD_GREY };
