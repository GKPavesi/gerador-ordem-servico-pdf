const modelequipamentos = require('../models/model-equipamentos')
const modelgarantia = require('../models/model-garantia')
const modelmarcascelulares = require('../models/model-marcasCelulares')
const modelpagamentos = require('../models/model-pagamentos')
const modelsexos = require('../models/model-sexos')
const modeltecnicos = require('../models/model-tecnicos')
const optionsMapper = require('../utils/mappers/select-options.mapper')
const modeldata = require('../models/model-data')
const modelordem = require('../models/modelnumeroordem')
const modelcpf = require('../models/model-cpf-cnpj')
const fs = require('fs')
const Joi = require('joi')
const ejs = require('ejs')
const htmlToPdf = require("html-pdf-node");
const path = require('path')

const getGerador = (req, res, next) => {

    const viewModel = {
        opcoesequipamentos: optionsMapper.mapper('equipamento', 'id', modelequipamentos.listaTodos()),
        opcoesgarantia: optionsMapper.mapper('tempo', 'id', modelgarantia.listaTodos()),
        opcoesmarcascelulares: optionsMapper.mapper('marca', 'id', modelmarcascelulares.listaTodos()),
        opcoespagamentos: optionsMapper.mapper('status', 'id', modelpagamentos.listaTodos()),
        opcoessexos: optionsMapper.mapper('sexo', 'id', modelsexos.listaTodos()),
        opcoestecnicos: optionsMapper.mapper('tecnico', 'id', modeltecnicos.listaTodos()),
    }

    res.render('gerador', viewModel)
}

const postGerador = (req, res, next) => {
    //construindo viewModel
    const {nome, sexo, endereço, cpfcnpj, email, telefone, equipamento, marca, modelo, diagnostico, solucao, pecasutilizadas, dataentrega, tecnicoresponsavel, totalservico, garantia, statuspagamento} = req.body;

    const sexoSelecionado = modelsexos.buscarPorId(sexo);
    const tecnicoSelecionado = modeltecnicos.buscarPorId(tecnicoresponsavel);
    const pagamentosSelecionado = modelpagamentos.buscarPorId(statuspagamento);
    const marcaSelecionado = modelmarcascelulares.buscarPorId(marca);
    const garantiaSelecionado = modelgarantia.buscarPorId(garantia);
    const equipamentoSelecionado = modelequipamentos.buscarPorId(equipamento);
    const datatratada = modeldata.tratarData(dataentrega);
    const numerodaordem = modelordem.pegarnumero();
    const cpfformatado = modelcpf.tratarcpf(cpfcnpj);

    const pdfViewModel = {
        nome,
        sexo: sexoSelecionado.sexo,
        endereço,
        cpfcnpj: cpfformatado,
        email,
        telefone,
        equipamento: equipamentoSelecionado.equipamento,
        marca: marcaSelecionado.marca,
        modelo,
        diagnostico,
        solucao,
        pecasutilizadas,
        dataentrega: datatratada,
        tecnicoresponsavel: tecnicoSelecionado.tecnico,
        totalservico,
        garantia: garantiaSelecionado.tempo,
        statuspagamento: pagamentosSelecionado.status,
        nrordem: numerodaordem
    }

    //montando html

    const filePath = path.join(__dirname, "../views/gerador-pdf.ejs");

    const templateHtml = fs.readFileSync(filePath, 'utf-8')

    //montando pdf
    var htmlPronto = ejs.render(templateHtml, pdfViewModel)

    //retornando o pdf

    const file = {
        content: htmlPronto
    }


    const configuracoes = {
        format: 'A4',
        printBackground: true
    }

    htmlToPdf.generatePdf(file, configuracoes)
    .then((resultPromessa) => {
        res.contentType("application/pdf");
        res.send(resultPromessa);
      });

}

const postGeradorSchema = Joi.object({
    nome: Joi.string().max(50).min(5).required().custom((value, helpers) => {
        const result = value.split(' ');
        if (result.length > 1) {
            return value;
        }
        return helpers.error("any.invalid");
    }),
   sexo: Joi.number().required().min(1).max(3),
   endereço: Joi.string().min(15).max(100).required(),
   cpfcnpj: Joi.string().min(11).max(14).required(),
   email: Joi.string().email().required(),
   telefone: Joi.string().min(11).max(14).required(),
   equipamento: Joi.number().required().min(1).max(3),
   marca: Joi.number().required().min(1).max(19),
   modelo: Joi.string().min(1).max(30).required(),
   diagnostico: Joi.string().min(1).max(500).required(),
   solucao: Joi.string().min(1).max(500).required(),
   pecasutilizadas: Joi.string().min(1).max(500).required(),
   dataentrega: Joi.date().required(),
   tecnicoresponsavel: Joi.number().required().min(1).max(4),
   totalservico: Joi.number().required(),
   garantia: Joi.number().required().min(1).max(6),
   statuspagamento: Joi.number().required().min(1).max(4)
})


module.exports = {
    getGerador,
    postGerador,
    postGeradorSchema
}