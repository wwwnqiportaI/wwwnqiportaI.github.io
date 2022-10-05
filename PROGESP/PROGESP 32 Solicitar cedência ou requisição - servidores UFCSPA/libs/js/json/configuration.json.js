Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROGESP] 32 Solicitar cedência ou requisição - servidores UFCSPA","publishDate":"05/10/2022 09:35:07","pages":[{"id":"54d2c3b9-ce51-49ab-9f2d-0d6d8015a2a3","name":"[PROGESP] 32 Solicitar cedência ou requisição - servidores UFCSPA","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\PROGESP]_32_Solicitar_cedencia_ou_requisicao___servidores_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"29b7ab8e-e8ac-41ef-a47b-fdcef9b1129f","name":"[PROGESP] 32 Solicitar cedência ou requisição - servidores UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1847.2,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"1c38c51a-3c49-4643-8ad8-dc4339ae397a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":133.0,"y":58.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"a03d4c15-eb5b-4fac-9179-bb7cdc3d4902","name":"Abrir processo de cedência e requisição de servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":235.0,"y":37.0}],"radius":0.0,"height":73.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9b4a651c-2060-47ec-809c-cc95e2b01540","name":"Incluir documentos comprobatórios em PDF","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":389.5,"y":43.0}],"radius":0.0,"height":61.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"571d5db3-f260-4d75-8f92-a88fbb0b8246","name":"Analisar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":394.0,"y":198.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b0c3358-e045-4387-8734-a9e38abe459b","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":387.0,"y":287.0}],"radius":0.0,"height":66.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be100e9a-5145-470a-8628-f73bd57db1c0","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":387.0,"y":410.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4b7aee86-b5fb-4f70-8cd0-fab74dd7ee17","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":388.0,"y":531.0}],"radius":0.0,"height":61.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4a9a38e2-43ca-4950-881b-f15c2c0750ad","name":"Concordância ou possibilidade de movimentação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":419.0,"y":627.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3bdf74b9-9770-475b-b1b0-fe4dc2b8fae5","name":"Incluir documento  011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":394.0,"y":789.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3616ebc3-1a7e-424b-a979-7e6a09dba2d0","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":553.0,"y":667.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d5b7f835-6281-44c3-9b12-a50fb04de8be","name":"Enviar em PDF ofício para órgão solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":579.5,"y":790.0}],"radius":0.0,"height":62.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a63e4c60-4fcc-4733-8e62-61f608e68911","name":"Aguardar resposta do órgão","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":612.0,"y":884.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f5c4a3db-eea9-4cd8-986a-6889e454c17b","name":"Realizar contato com o setor de mobilidade  do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":572.0,"y":959.0}],"radius":0.0,"height":78.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"625e55ba-7107-48af-acaf-3777b861f76a","name":"Processo autorizado no órgão solicitante?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":607.0,"y":1081.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c52fea09-4a60-4778-a37d-9f07aa96afed","name":"Incluir em PDF a Portaria do órgão solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":578.0,"y":1242.0}],"radius":0.0,"height":69.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9b46f769-7fb6-47a4-a907-859fc24e7902","name":"Registrar cedência no SIAPE ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":582.0,"y":1352.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e5595a39-fcc4-4cde-a569-0bddd82c0f4e","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":582.0,"y":1456.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DAP/DAP%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"b95c823d-1a75-484a-bfbc-fbfdc4b19f82","name":"Comunicar interessado e Pró-Reitoria vinculada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.5,"y":1541.0}],"radius":0.0,"height":64.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"662ddb19-fc1a-4916-8410-2ed1aa80c464","name":"Comunicar interessado e Pró-Reitoria vinculada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":769.0,"y":800.0}],"radius":0.0,"height":64.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"656944b1-332c-4f07-b4e5-5bd35bd176c0","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":772.0,"y":914.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06db5abc-c67c-4ace-8078-3226b75cdcad","name":"Encaminhar ofício para entidade externa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":769.5,"y":1002.0}],"radius":0.0,"height":66.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"73b1daa2-03cc-4750-9d13-3dfc03094a3d","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":578.0,"y":1641.0}],"radius":0.0,"height":63.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"08f3e4aa-c5d2-43e3-bfe3-9976df0646cb","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":777.0,"y":1759.9}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"203112c9-7a95-452d-ae4a-8e0c7ea69595","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":894.0,"y":1774.9}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"dce83715-6e11-413f-a3b6-6f60f25d95af","name":"Interessado ou DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":156.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"97340701-d047-4441-9d33-7e51dfb594ca","name":"PROGESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":176.0}],"radius":0.0,"height":202.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"49186a63-f873-4a67-b211-8b630a06f1a1","name":"Pró-Reitoria vinculada","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":378.0}],"radius":0.0,"height":128.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f0c7446c-9c84-4a0a-a117-9f46a2db5638","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":506.0}],"radius":0.0,"height":256.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b48d0790-64c5-4a34-a89b-4e01f97fb58b","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":762.0}],"radius":0.0,"height":982.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fb6bbcd4-a967-4018-861b-f4ff818603d6","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1744.0}],"radius":0.0,"height":123.2,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"54d2c3b9-ce51-49ab-9f2d-0d6d8015a2a3","containerName":"[PROGESP] 32 Solicitar cedência ou requisição - servidores UFCSPA","isSubprocess":false,"elements":[{"id":"29b7ab8e-e8ac-41ef-a47b-fdcef9b1129f","value":"[PROGESP] 32 Solicitar cedência ou requisição - servidores UFCSPA"},{"id":"dce83715-6e11-413f-a3b6-6f60f25d95af","value":"Interessado ou DIPROT"},{"id":"97340701-d047-4441-9d33-7e51dfb594ca","value":"PROGESP"},{"id":"49186a63-f873-4a67-b211-8b630a06f1a1","value":"Pró-Reitoria vinculada"},{"id":"f0c7446c-9c84-4a0a-a117-9f46a2db5638","value":"REITORIA"},{"id":"b48d0790-64c5-4a34-a89b-4e01f97fb58b","value":"DAP"},{"id":"fb6bbcd4-a967-4018-861b-f4ff818603d6","value":"DIARQ"},{"id":"1c38c51a-3c49-4643-8ad8-dc4339ae397a","value":""},{"id":"a03d4c15-eb5b-4fac-9179-bb7cdc3d4902","value":"Abrir processo de cedência e requisição de servidor"},{"id":"3bdf74b9-9770-475b-b1b0-fe4dc2b8fae5","value":"Incluir documento  011 - Ofício"},{"id":"3616ebc3-1a7e-424b-a979-7e6a09dba2d0","value":"Assinar documento em bloco"},{"id":"9b46f769-7fb6-47a4-a907-859fc24e7902","value":"Registrar cedência no SIAPE "},{"id":"203112c9-7a95-452d-ae4a-8e0c7ea69595","value":""},{"id":"662ddb19-fc1a-4916-8410-2ed1aa80c464","value":"Comunicar interessado e Pró-Reitoria vinculada"},{"id":"e5595a39-fcc4-4cde-a569-0bddd82c0f4e","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"4b7aee86-b5fb-4f70-8cd0-fab74dd7ee17","value":"Incluir documento 872 - Despacho simples"},{"id":"4a9a38e2-43ca-4950-881b-f15c2c0750ad","value":"Concordância ou possibilidade de movimentação?"},{"id":"9b4a651c-2060-47ec-809c-cc95e2b01540","value":"Incluir documentos comprobatórios em PDF"},{"id":"8b0c3358-e045-4387-8734-a9e38abe459b","value":"Incluir documento 872 - Despacho simples"},{"id":"be100e9a-5145-470a-8628-f73bd57db1c0","value":"Incluir documento 872 - Despacho simples"},{"id":"571d5db3-f260-4d75-8f92-a88fbb0b8246","value":"Analisar processo"},{"id":"06db5abc-c67c-4ace-8078-3226b75cdcad","value":"Encaminhar ofício para entidade externa"},{"id":"656944b1-332c-4f07-b4e5-5bd35bd176c0","value":"Incluir documento 011 - Ofício"},{"id":"d5b7f835-6281-44c3-9b12-a50fb04de8be","value":"Enviar em PDF ofício para órgão solicitante"},{"id":"a63e4c60-4fcc-4733-8e62-61f608e68911","value":"Aguardar resposta do órgão"},{"id":"f5c4a3db-eea9-4cd8-986a-6889e454c17b","value":"Realizar contato com o setor de mobilidade  do interessado"},{"id":"625e55ba-7107-48af-acaf-3777b861f76a","value":"Processo autorizado no órgão solicitante?"},{"id":"c52fea09-4a60-4778-a37d-9f07aa96afed","value":"Incluir em PDF a Portaria do órgão solicitante"},{"id":"b95c823d-1a75-484a-bfbc-fbfdc4b19f82","value":"Comunicar interessado e Pró-Reitoria vinculada"},{"id":"08f3e4aa-c5d2-43e3-bfe3-9976df0646cb","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"73b1daa2-03cc-4750-9d13-3dfc03094a3d","value":"Incluir documento 872 - Despacho simples"},{"id":"0f407586-ba5d-442d-a7e0-bac139ad7de4"},{"id":"ea6b855e-69a9-4d4e-b6fe-2d269315a746"},{"id":"2619e5c2-bf17-40cb-a501-fadc8c1b27f8"},{"id":"5aff6401-5776-4dcc-8e7d-e040c18b535a"},{"id":"8f83a60d-2f16-4152-8059-ef31e4e5ff8e"},{"id":"e4b90198-41b1-4cc5-8e60-621200638391"},{"id":"a2671a5b-6299-47a0-a98c-5a62c7c99e7a"},{"id":"f3947d2e-2fda-45ae-a2e8-26d330c25057"},{"id":"d145395b-9ffa-49e9-ba97-42b7d64d2001"},{"id":"8c9d3dfd-1b56-4c2c-aa09-86bcc57e7c7e"},{"id":"72152eec-4c6c-446a-9ab4-c5c8072a4898"},{"id":"f7590544-7218-4f27-8068-da99f9ce4c60"},{"id":"bb50efb3-3702-4e1f-850a-3485f4ff483e"},{"id":"2e82fa9d-28d5-4b78-a567-e2ea8ebf8237"},{"id":"1fec72f8-aee6-4364-97a2-3b3bb171d7ca"},{"id":"b53de7a3-7002-4eb2-b52b-bb66aca7e6a1"},{"id":"ecadd40b-b948-499d-97fb-0a6a8c4b3133"},{"id":"a26f037b-9cd0-438d-9c21-2bd0246f28f2"}]}]}