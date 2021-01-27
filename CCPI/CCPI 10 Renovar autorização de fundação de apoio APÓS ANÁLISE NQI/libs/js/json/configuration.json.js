Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CCPI] 10 Renovar autorização de fundação de apoio APÓS ANÁLISE NQI","publishDate":"26/01/2021 23:30:54","pages":[{"id":"caa67a33-9024-460a-a470-b28bac9ac053","name":"[CCPI] 10 Renovar autorização de fundação de apoio","version":"1.0","author":"ariel","image":"files\\diagrams\\CCPI]_10_Renovar_autorizacao_de_fundacao_de_apoio.png","isSubprocessPage":false,"elements":[{"id":"5b894343-829d-42f9-8689-f9634331b5c7","name":"[CCPI] 10 Renovar autorização de fundação de apoio","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2142.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"8c065fce-7014-474b-92e6-87fb47401dc9","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Of&iacute;cio PROPLAN e documentos da funda&ccedil;&atilde;o conforme checklist descrito na Norma de Relacionamento com Funda&ccedil;&otilde;es de Apoio.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":119.0,"y":57.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f3e1f95f-3d3f-4abb-b098-2934afb14331","name":"Abrir processo de renovação de autorização de fundação de apoio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":193.0,"y":37.0}],"radius":0.0,"height":71.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"36dea9e8-f1a7-43f7-821b-955a66c38c93","name":"Incluir documento 011- Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":205.0,"y":130.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"92b11d95-648d-4550-8b64-1f0941b4c50d","name":"Liberar acesso  externo para fundação de apoio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":198.0,"y":208.0}],"radius":0.0,"height":58.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13fe0c13-4eda-475f-9d21-6b2c1d27acd3","name":" Incluir em PDF os documentos necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":188.0,"y":343.0}],"radius":0.0,"height":60.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0cc52044-f130-4c5f-b762-7258c10fd717","name":"Há projeto em execução no ano vigente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":189.0,"y":729.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"4fd1a076-96dd-4b8e-a2d2-81a8031c911a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":160.0,"y":890.0}],"radius":0.0,"height":75.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"47ce3d05-a137-4d29-bc15-9d42d81471cf","name":"Incluir documento 159 - Relatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":298.0,"y":1062.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0b260e88-3d0b-43fb-9a81-1db21e4863eb","name":"Analisar  adequação da peça processual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":283.5,"y":719.0}],"radius":0.0,"height":60.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dedb020c-bf25-4f8f-9096-b8e5d2360127","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":425.0,"y":719.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f3032dc5-71c3-4c3e-b72b-f6a2337e7603","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":565.0,"y":729.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4a4687e1-72ad-4acd-b24e-fe49a68ab462","name":"Efetuar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":540.0,"y":459.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"049af0b4-6f75-4c62-916e-ad193b496fc0","name":"Incluir documento 308 - Avaliação de desempenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":534.0,"y":1269.0}],"radius":0.0,"height":59.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54add265-372e-4494-a125-854199c72357","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":539.5,"y":1370.0}],"radius":0.0,"height":68.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3d3cda4-fab7-46ca-b8f7-28fe5aef4f27","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":538.5,"y":1589.0}],"radius":0.0,"height":62.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"053e89f7-9c26-4f68-a375-9690a3bee753","name":"[SECON] 12 Pautar as sessões dos Conselhos Superiores","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":541.0,"y":1851.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/SECON/%5bSECON%5d%2012%20Pautar%20as%20sess%c3%b5es%20dos%20Conselhos%20Superiores/#list","type":"url"}},{"id":"2be4801b-e7f7-4bec-bf8f-e41ea91fdc51","name":"Incluir documento 173 - Resolução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":777.0,"y":1849.0}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bfb4ddac-6e38-4d49-848e-df10a65995af","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":809.0,"y":1637.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"fa4477f8-0e44-4751-81e1-2282e77be6db","name":"Publicar resolução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":779.0,"y":1457.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f9788056-41cf-4980-93ef-67b8145e37d7","name":"Resolução de aprovação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":804.0,"y":1284.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0929cb2d-40f0-4322-a58c-7efe23dad63f","name":"Encaminhar resolução para a fundação de apoio","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":716.0,"y":761.0}],"radius":0.0,"height":73.0,"width":91.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"51b7d366-75be-4ff6-8e76-f8f1e95d5d8b","name":"Incluir em PDF documentos para solicitação de renovação de autorização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":708.500061,"y":301.5}],"radius":0.0,"height":84.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aee556b6-e754-479c-bf1d-48aff129b937","name":"Encaminhar solicitação  de renovação de autorização ao GAT MEC/MCTI ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":781.9934,"y":413.5}],"radius":0.0,"height":79.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a29e328f-8f20-49a4-b4ef-720fb93c7792","name":"Aguardar análise do GAT","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":972.0,"y":437.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"af7e7f82-00b1-42b3-a770-1bfceab794a2","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1110.0,"y":432.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"346c77cf-5962-4d5f-922f-4e77337092c7","name":"Incluir em PDF diligência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1224.0,"y":509.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e67174d5-a68e-4d9d-a455-698ffc28f74f","name":"Elaborar resposta à diligência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1224.0,"y":682.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8cb7f500-0d93-4389-ae8e-ca017a51e8a8","name":"Incluir documentos de resposta à diligência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1215.0,"y":772.0}],"radius":0.0,"height":83.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7bd08e56-a537-415e-bb71-c86097ad5bcd","name":"Dar ciência na resposta à diligência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1224.0,"y":1249.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"499ad40e-c8c8-4b60-b6a6-48ee73af8e32","name":"Incluir em PDF portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1087.0,"y":516.0}],"radius":0.0,"height":41.0,"width":86.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c0c5b8d6-a8f6-4e10-b149-f6b2006161ff","name":"Atualizar controles internos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1085.0,"y":681.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0ded8fee-9a36-4145-ad3b-aec138815f9f","name":"Atualizar informações no site institucional ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1084.0,"y":773.0}],"radius":0.0,"height":63.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f1befee8-9e72-47d3-99dc-e2de1fc25d3b","name":"Incluir documento 246 - Ciência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":846.0,"y":775.0}],"radius":0.0,"height":65.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"276f6bd4-f125-4ce8-af40-863e01d67d0c","name":"Assinar documento 246 - Ciência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":914.0,"y":524.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9600982e-54fa-45b3-9d63-c2c959f54540","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1085.0,"y":2060.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4ee7b14-291d-4e45-b0c2-fe540939aaa5","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DAS:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">1. Resolu&ccedil;&atilde;o de Renova&ccedil;&atilde;o de autoriza&ccedil;&atilde;o.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">2. Arquivamento do processo por reprova&ccedil;&atilde;o do CONSUN</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1217.0,"y":2075.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"8914488f-ffc7-4c1f-a5e8-5cc310bc92b6","name":"PROPLAN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":265.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"046edd42-f90d-4d55-8d71-e98b60430812","name":"Fundação de Apoio","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":285.0}],"radius":0.0,"height":377.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"49dc2f0f-e461-442d-a29c-1f7ac4d00d7b","name":"CCPI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":662.0}],"radius":0.0,"height":353.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b1e88e09-cd39-47f7-877d-0bdd531828a4","name":"Coordenadores de projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1015.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6cc33a8d-d611-4b3d-b628-d3f2c0b3e9be","name":"ASSESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1215.0}],"radius":0.0,"height":340.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a622e3d8-c0f7-4268-8289-f43b31f1a6b8","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1555.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"52025497-253e-4321-bde6-31e0a73dc191","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1755.0}],"radius":0.0,"height":246.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5b3688fb-fe81-46f8-95cb-0821f223df12","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2001.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"caa67a33-9024-460a-a470-b28bac9ac053","containerName":"[CCPI] 10 Renovar autorização de fundação de apoio","isSubprocess":false,"elements":[{"id":"5b894343-829d-42f9-8689-f9634331b5c7","value":"[CCPI] 10 Renovar autorização de fundação de apoio"},{"id":"8914488f-ffc7-4c1f-a5e8-5cc310bc92b6","value":"PROPLAN"},{"id":"046edd42-f90d-4d55-8d71-e98b60430812","value":"Fundação de Apoio"},{"id":"49dc2f0f-e461-442d-a29c-1f7ac4d00d7b","value":"CCPI"},{"id":"b1e88e09-cd39-47f7-877d-0bdd531828a4","value":"Coordenadores de projeto"},{"id":"6cc33a8d-d611-4b3d-b628-d3f2c0b3e9be","value":"ASSESP"},{"id":"a622e3d8-c0f7-4268-8289-f43b31f1a6b8","value":"REITORIA"},{"id":"52025497-253e-4321-bde6-31e0a73dc191","value":"SECON"},{"id":"5b3688fb-fe81-46f8-95cb-0821f223df12","value":"DIARQ"},{"id":"36dea9e8-f1a7-43f7-821b-955a66c38c93","value":"Incluir documento 011- Ofício"},{"id":"aee556b6-e754-479c-bf1d-48aff129b937","value":"Encaminhar solicitação  de renovação de autorização ao GAT MEC/MCTI "},{"id":"0ded8fee-9a36-4145-ad3b-aec138815f9f","value":"Atualizar informações no site institucional "},{"id":"4a4687e1-72ad-4acd-b24e-fe49a68ab462","value":"Efetuar adequações"},{"id":"499ad40e-c8c8-4b60-b6a6-48ee73af8e32","value":"Incluir em PDF portaria"},{"id":"c4ee7b14-291d-4e45-b0c2-fe540939aaa5","value":""},{"id":"2be4801b-e7f7-4bec-bf8f-e41ea91fdc51","value":"Incluir documento 173 - Resolução"},{"id":"9600982e-54fa-45b3-9d63-c2c959f54540","value":"Realizar tratamento arquivístico"},{"id":"bfb4ddac-6e38-4d49-848e-df10a65995af","value":"Assinar documento em bloco"},{"id":"8c065fce-7014-474b-92e6-87fb47401dc9","value":""},{"id":"f3e1f95f-3d3f-4abb-b098-2934afb14331","value":"Abrir processo de renovação de autorização de fundação de apoio"},{"id":"276f6bd4-f125-4ce8-af40-863e01d67d0c","value":"Assinar documento 246 - Ciência"},{"id":"a29e328f-8f20-49a4-b4ef-720fb93c7792","value":"Aguardar análise do GAT"},{"id":"fa4477f8-0e44-4751-81e1-2282e77be6db","value":"Publicar resolução"},{"id":"4fd1a076-96dd-4b8e-a2d2-81a8031c911a","value":"Incluir documento 872 - Despacho simples"},{"id":"0929cb2d-40f0-4322-a58c-7efe23dad63f","value":"Encaminhar resolução para a fundação de apoio"},{"id":"13fe0c13-4eda-475f-9d21-6b2c1d27acd3","value":" Incluir em PDF os documentos necessários"},{"id":"7bd08e56-a537-415e-bb71-c86097ad5bcd","value":"Dar ciência na resposta à diligência"},{"id":"54add265-372e-4494-a125-854199c72357","value":"Incluir documento 872 - Despacho simples"},{"id":"c3d3cda4-fab7-46ca-b8f7-28fe5aef4f27","value":"Incluir documento 872 - Despacho simples"},{"id":"af7e7f82-00b1-42b3-a770-1bfceab794a2","value":""},{"id":"049af0b4-6f75-4c62-916e-ad193b496fc0","value":"Incluir documento 308 - Avaliação de desempenho"},{"id":"dedb020c-bf25-4f8f-9096-b8e5d2360127","value":"Incluir documento 191 - Parecer"},{"id":"c0c5b8d6-a8f6-4e10-b149-f6b2006161ff","value":"Atualizar controles internos"},{"id":"346c77cf-5962-4d5f-922f-4e77337092c7","value":"Incluir em PDF diligência"},{"id":"053e89f7-9c26-4f68-a375-9690a3bee753","value":"[SECON] 12 Pautar as sessões dos Conselhos Superiores"},{"id":"92b11d95-648d-4550-8b64-1f0941b4c50d","value":"Liberar acesso  externo para fundação de apoio"},{"id":"0b260e88-3d0b-43fb-9a81-1db21e4863eb","value":"Analisar  adequação da peça processual"},{"id":"f9788056-41cf-4980-93ef-67b8145e37d7","value":"Resolução de aprovação?"},{"id":"f1befee8-9e72-47d3-99dc-e2de1fc25d3b","value":"Incluir documento 246 - Ciência"},{"id":"f3032dc5-71c3-4c3e-b72b-f6a2337e7603","value":""},{"id":"e67174d5-a68e-4d9d-a455-698ffc28f74f","value":"Elaborar resposta à diligência"},{"id":"51b7d366-75be-4ff6-8e76-f8f1e95d5d8b","value":"Incluir em PDF documentos para solicitação de renovação de autorização"},{"id":"8cb7f500-0d93-4389-ae8e-ca017a51e8a8","value":"Incluir documentos de resposta à diligência"},{"id":"0cc52044-f130-4c5f-b762-7258c10fd717","value":"Há projeto em execução no ano vigente?"},{"id":"47ce3d05-a137-4d29-bc15-9d42d81471cf","value":"Incluir documento 159 - Relatório"},{"id":"0cc60b2d-be19-4d8f-9804-54faf8e4eb8c"},{"id":"67488fcb-218f-4ec2-a38f-a17ac603bcc0"},{"id":"51aa1841-5907-4f20-a198-0c71ce4d8bae"},{"id":"cfcdedaa-1f1d-4d26-a83c-2a45b62ca2df"},{"id":"48ff529e-f4e3-4da1-b953-1c9378eb8cf1"},{"id":"3a72abf9-f143-48a4-b3cc-5c0e2b212222"},{"id":"9e7cc735-bc5b-4215-9e0d-8508259e2fa2"},{"id":"4dd39909-5875-49a7-8df4-eecd1d010282"},{"id":"514dd164-7bd6-41ce-982f-5e1d6c72ea03"},{"id":"19c38478-08ce-4aaa-84b8-64a49fc2e0cb"},{"id":"1053d209-ab89-45b1-b76a-3408dfb992d8"},{"id":"59d4492b-15f7-4a4a-a565-c601e3ff4ddc"},{"id":"f71a4558-261e-4b4d-a530-dead222f1308"},{"id":"34c64976-5f6f-4581-b978-bedb9a734640"},{"id":"73a21b5a-9c92-4b39-8a73-aa4241335fcc"},{"id":"a029bb3b-c4cf-4c53-9f44-844f0f2ae511"},{"id":"ae8cbebb-5895-4b6c-b7d3-f9909a2072a5"},{"id":"8cf29118-7f56-400d-9931-fbca5ab97c76"},{"id":"ab042e22-db27-400a-a71c-d5e24abc4077"},{"id":"143c683c-6024-4ddf-b401-cfe1dfafb294"},{"id":"ea8d91fa-65e4-4f4a-a71a-ecd8b1160af4"},{"id":"f22ae8ee-9b3d-4f46-96b5-ca8a40231c6e"},{"id":"b1d86adb-6964-42e3-aee4-03f8c9188a27"},{"id":"c73c0e4c-1dcf-45f0-bc9a-9a175ee52694"},{"id":"c4da3e3b-8d15-4edd-9db2-2dfc8489e878"},{"id":"e5ab471e-2efb-4e8a-909e-3326dcf2af53"},{"id":"58572a74-d11a-4cfb-a4e3-16027a013df5"},{"id":"49dd4c76-03c0-4155-a05f-8b0b3aeb9eaa"},{"id":"5b80ed31-de79-425b-8c10-d5828fab4c1c"},{"id":"d149e749-b5bc-4e0d-abd4-2ca4f362c17d"},{"id":"d37312f1-b373-4a96-9677-c16449579d85"},{"id":"f03ac2c9-edcc-4f03-a9f4-a4f02ccae2bb"},{"id":"477473f2-b13a-4095-9455-0eab8b48e871"}]}]}