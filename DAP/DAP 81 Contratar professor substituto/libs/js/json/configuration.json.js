Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 81 Contratar professor substituto","publishDate":"30/11/2020 08:06:40","pages":[{"id":"4d554bba-23a5-46d7-8e48-b39bf316fa8b","name":"[DAP] 81 Contratar professor substituto","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_81_Contratar_professor_substituto.png","isSubprocessPage":false,"elements":[{"id":"69ecca5f-51f9-4f41-a388-009a9e5f2118","name":"[DAP] 81 Contratar professor substituto","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1510.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7e339acf-d8f2-4c63-906b-956bd725927b","name":"Necessidade de contratar professor substituto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Resultado da sele&ccedil;&atilde;o, plano de ensino, justificativa de execu&ccedil;&atilde;o em outra atividade</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":214.0,"y":48.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"7ff0e3b8-ac6e-49ce-8015-d04019c72ce1","name":"Abrir processo contratação por tempo determinado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":287.0,"y":28.0}],"radius":0.0,"height":70.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce65e24a-00d1-4e85-9364-7a75de9c3f5c","name":"Enviar e-mail para interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":295.0,"y":346.0}],"radius":0.0,"height":70.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9bab7b49-943b-4b6b-8718-0241117b1ce7","name":"Contactar  interessado por telefone ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":294.0,"y":473.0}],"radius":0.0,"height":60.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2c72b93-7e6b-48ad-af63-1eae481702f1","name":"Interesse em assumir vaga?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":515.0,"y":847.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"73f6a0ec-019f-4ba6-b56d-6e62a6cd6a29","name":"Formalizar a desistência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":733.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f0bf17a6-6edc-47a1-a741-8a5a79edd301","name":"Incluir em PDF documento de desistência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":486.0,"y":522.0}],"radius":0.0,"height":78.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23449b2a-4be1-475a-8c51-971534d3cd05","name":"Comparecer ao DAP com documentos oficiais e preencher formulários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":647.0,"y":827.0}],"radius":0.0,"height":80.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e593e87-bb86-40d4-9ce8-a72c2e81aec1","name":"Requisitos preenchidos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":689.0,"y":252.299988}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"7062bdc2-b683-4efd-bce3-63a380196ad7","name":"Informar candidato sobre não atendimento de requisitos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":505.0,"y":238.0}],"radius":0.0,"height":69.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"19fedb22-1e6d-4f6c-8109-2ec9dcd4826c","name":"Incluir em PDF todos documentos apresentados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":732.0,"y":359.0}],"radius":0.0,"height":71.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"359ca582-cf1c-4aed-a6d4-4d48bea6342d","name":"Incluir documento\t138 - Contrato ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":866.0,"y":233.0}],"radius":0.0,"height":67.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fd00caef-6d61-4078-a84f-6927f0125453","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":899.0,"y":404.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"60c7287c-1ff3-4e5f-a439-c13c764e5a0b","name":"Assinar documento com acesso externo","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":904.0,"y":818.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"ce6282b6-45b9-4493-9285-8e3a147c52a7","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":862.0,"y":1311.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"96772866-a3bd-4210-a02e-5a03d1876164","name":"Assinatura de duas testemunhas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1033.0,"y":409.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"033c1b35-f3bc-4320-b302-ac1837a37286","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1028.0,"y":813.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"893f39d6-9485-4f41-8196-a64e51ad4df1","name":"Comparecer em seu departamento na data do contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1090.0,"y":795.0}],"radius":0.0,"height":77.0,"width":132.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"28b98ff4-ad07-4665-bd0f-bfc898138b61","name":"Registrar no SIAPE e sistemas institucionais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1099.0,"y":554.0}],"radius":0.0,"height":72.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0b7edd66-2afc-4d0f-9a7a-d7f83236cd08","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1111.5,"y":258.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"498de368-ba74-48c8-aa03-b3ffd41eca0b","name":"Aguardar período de renovação","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1291.0,"y":273.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"49af6293-bb48-4af7-9f87-010b76e22bb6","name":"Necessidade/ interesse de renovação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1339.0,"y":390.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"52646c6a-56ac-452e-947d-88dc44c8ea83","name":"Incluir documento 078 - Termo aditivo de contrato prof. substituto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1304.0,"y":491.0}],"radius":0.0,"height":72.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"640563b3-edff-4d1a-b594-a2cdb75438f1","name":"Assinar documento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1344.0,"y":828.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"212a0e53-ce07-4c45-99c9-6592baf83293","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1235.0,"y":1304.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"cb0f3ff5-eeb8-4699-8eb7-e3f206f14c3e","name":"Aguardar término de contrato","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1482.0,"y":608.000061}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d4487f77-5b4b-4be2-9e8d-e9914cf0db78","name":"Incluir documento 895 - Formulário rescisão contrato de substituto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1605.0,"y":588.0}],"radius":0.0,"height":71.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bcf5630f-9d21-4470-9f57-42384185e03e","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1613.0,"y":1435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f04b078-1238-4fa7-a23c-cb41b4c1c837","name":"Professor substituto contratado ","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1745.0,"y":1450.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"11aa6d75-8fbd-4346-9e30-43738279ba84","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":695.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"91520e03-9293-42b0-9d6e-c71ac11ffceb","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":715.0}],"radius":0.0,"height":551.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fbc74928-2edb-436f-8fe7-5840f42cb630","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1266.0}],"radius":0.0,"height":133.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"039722e2-db37-4306-92a9-1dd2cc97def4","name":"Divisão de Arquivo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1399.0}],"radius":0.0,"height":131.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4d554bba-23a5-46d7-8e48-b39bf316fa8b","containerName":"[DAP] 81 Contratar professor substituto","isSubprocess":false,"elements":[{"id":"69ecca5f-51f9-4f41-a388-009a9e5f2118","value":"[DAP] 81 Contratar professor substituto"},{"id":"11aa6d75-8fbd-4346-9e30-43738279ba84","value":"DAP"},{"id":"91520e03-9293-42b0-9d6e-c71ac11ffceb","value":"Interessado"},{"id":"fbc74928-2edb-436f-8fe7-5840f42cb630","value":"Reitoria"},{"id":"039722e2-db37-4306-92a9-1dd2cc97def4","value":"Divisão de Arquivo"},{"id":"7e339acf-d8f2-4c63-906b-956bd725927b","value":"Necessidade de contratar professor substituto"},{"id":"0f04b078-1238-4fa7-a23c-cb41b4c1c837","value":"Professor substituto contratado "},{"id":"7ff0e3b8-ac6e-49ce-8015-d04019c72ce1","value":"Abrir processo contratação por tempo determinado"},{"id":"ce65e24a-00d1-4e85-9364-7a75de9c3f5c","value":"Enviar e-mail para interessado"},{"id":"9bab7b49-943b-4b6b-8718-0241117b1ce7","value":"Contactar  interessado por telefone "},{"id":"b2c72b93-7e6b-48ad-af63-1eae481702f1","value":"Interesse em assumir vaga?"},{"id":"73f6a0ec-019f-4ba6-b56d-6e62a6cd6a29","value":"Formalizar a desistência"},{"id":"f0bf17a6-6edc-47a1-a741-8a5a79edd301","value":"Incluir em PDF documento de desistência"},{"id":"23449b2a-4be1-475a-8c51-971534d3cd05","value":"Comparecer ao DAP com documentos oficiais e preencher formulários"},{"id":"1e593e87-bb86-40d4-9ce8-a72c2e81aec1","value":"Requisitos preenchidos?"},{"id":"893f39d6-9485-4f41-8196-a64e51ad4df1","value":"Comparecer em seu departamento na data do contrato"},{"id":"19fedb22-1e6d-4f6c-8109-2ec9dcd4826c","value":"Incluir em PDF todos documentos apresentados"},{"id":"28b98ff4-ad07-4665-bd0f-bfc898138b61","value":"Registrar no SIAPE e sistemas institucionais"},{"id":"bcf5630f-9d21-4470-9f57-42384185e03e","value":"Realizar tratamento arquivístico"},{"id":"359ca582-cf1c-4aed-a6d4-4d48bea6342d","value":"Incluir documento\t138 - Contrato "},{"id":"60c7287c-1ff3-4e5f-a439-c13c764e5a0b","value":"Assinar documento com acesso externo"},{"id":"ce6282b6-45b9-4493-9285-8e3a147c52a7","value":"Assinar documento em bloco"},{"id":"96772866-a3bd-4210-a02e-5a03d1876164","value":"Assinatura de duas testemunhas"},{"id":"49af6293-bb48-4af7-9f87-010b76e22bb6","value":"Necessidade/ interesse de renovação?"},{"id":"52646c6a-56ac-452e-947d-88dc44c8ea83","value":"Incluir documento 078 - Termo aditivo de contrato prof. substituto"},{"id":"d4487f77-5b4b-4be2-9e8d-e9914cf0db78","value":"Incluir documento 895 - Formulário rescisão contrato de substituto"},{"id":"640563b3-edff-4d1a-b594-a2cdb75438f1","value":"Assinar documento"},{"id":"212a0e53-ce07-4c45-99c9-6592baf83293","value":"Assinar documento em bloco"},{"id":"cb0f3ff5-eeb8-4699-8eb7-e3f206f14c3e","value":"Aguardar término de contrato"},{"id":"7062bdc2-b683-4efd-bce3-63a380196ad7","value":"Informar candidato sobre não atendimento de requisitos"},{"id":"fd00caef-6d61-4078-a84f-6927f0125453","value":""},{"id":"033c1b35-f3bc-4320-b302-ac1837a37286","value":""},{"id":"0b7edd66-2afc-4d0f-9a7a-d7f83236cd08","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"498de368-ba74-48c8-aa03-b3ffd41eca0b","value":"Aguardar período de renovação"},{"id":"28a6e1b0-24fa-45a5-9c2a-6a2573267722"},{"id":"21fb6cd3-6c8c-4a9e-bec6-1c6511ab0ac9"},{"id":"ed0f7bc5-41b7-4bd3-ac28-5b70c282db51"},{"id":"4751beb1-3dba-4204-bb12-9373ac8dcdcb"},{"id":"0a1bc68b-3660-4ef5-b33e-e0386ece2627"},{"id":"dcf0057d-e027-4fbb-bd7d-ac7adf46afb9"},{"id":"3eaddeb9-4420-41c8-b5ff-aa03b3165aa4"},{"id":"78207984-07cb-4a5b-a5d2-c5609034e863"},{"id":"47482c47-2101-4d60-8a38-b429e241129c"},{"id":"5c24c87c-24cd-462a-82b0-9b3b5738a75b"},{"id":"289fdece-b8ad-4084-b16e-7fc662af94a8"},{"id":"235c4641-8ccd-48bc-8150-ec30c691228c"},{"id":"91fbcf61-fa01-4ffe-beeb-f3b616944406"},{"id":"6fe55b6e-08b0-4a42-a859-3841cdcacdfb"},{"id":"8ebcdcf0-1b9d-4d0d-8ee3-b7afe33bad97"},{"id":"c867594e-5207-47d3-8572-6dfd34a901f5"},{"id":"b067ffda-3c74-4263-b1a6-5d512a01ca66"},{"id":"d45f0d16-c07f-429d-8285-0ba8f21084b0"},{"id":"3ac97a94-531b-4941-bbce-ffa5739a3778"},{"id":"9d5a28a3-31b1-47f7-8dfe-06f1a3eb9b44"}]}]}