const pdfService = require('../service/pdf-service');

const PDFTextReader = async (req, res, next) => {
  try {
    const pdf_url = req.body.pdf_url;
    const result = await pdfService.PDFTextReader(pdf_url);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
};

const PDFImageReader = async (req, res, next) => {
  try {
    const pdf_url = req.body.pdf_url;
    const result = await pdfService.PDFImageReader(pdf_url);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
};

const PDFReader = async (req, res, next) => {
  try {
    const pdf_url = req.body.pdf_url;
    const result = await pdfService.PDFReader(pdf_url);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  PDFTextReader,
  PDFImageReader,
  PDFReader,
};
