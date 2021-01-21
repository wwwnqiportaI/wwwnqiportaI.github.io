Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROAD] 25 Registrar processo de sinistro","publishDate":"08/01/2021 15:36:00","pages":[{"id":"64fc5b41-b03e-4a25-958b-0a0269b7d483","name":"[PROAD] 25 Registrar processo de sinistro","version":"1.0","author":"Bruno Fernandes","image":"files\\diagrams\\PROAD]_25_Registrar_processo_de_sinistro.png","isSubprocessPage":false,"elements":[{"id":"ba6270e8-99f4-4b16-87a6-168e9b2f3375","name":"[PROAD] 25 Registrar processo de sinistro","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1818.69983,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"da5a8ebd-896b-4e00-bd02-a9fc35922fbb","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":173.0,"y":142.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"8e854ee1-35b8-4cb5-bea4-b5c12809ac92","name":"Abrir processo de sinistro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":274.0,"y":124.0}],"radius":0.0,"height":66.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57d8ec68-05e8-4bab-9058-42f4c6c63956","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":228.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ef9a8643-b8ec-4fb7-ab63-4c253a6f71a9","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":248.0}],"radius":0.0,"height":199.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"90c2c290-04de-473e-875b-03fd46831cf9","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1266.0}],"radius":0.0,"height":172.3999,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"57d8ec68-05e8-4bab-9058-42f4c6c63956","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":228.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ef9a8643-b8ec-4fb7-ab63-4c253a6f71a9","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":248.0}],"radius":0.0,"height":199.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"90c2c290-04de-473e-875b-03fd46831cf9","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1266.0}],"radius":0.0,"height":172.3999,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c7bcab58-dd7c-4d53-b1ae-29430b5c462d","name":"Incluir documento 303 - Formulário de registro de sinistro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":421.0,"y":120.0}],"radius":0.0,"height":74.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c3c6aa0-0452-43af-aa7d-7f854f591003","name":"Incluir em PDF comprovante de ocorrência do sinistro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":567.0,"y":120.0}],"radius":0.0,"height":74.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f26baa0-f548-4e1b-abeb-46627d95b529","name":"Interessado é usuário externo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":617.0,"y":284.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e50373bc-3f35-4575-80ca-657faea27bf5","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":715.0,"y":274.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"16125650-11c8-44bb-8688-b0bc12052d22","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":703.0,"y":363.0}],"radius":0.0,"height":60.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d7d58bc2-ab86-478f-9f2e-fd932592de59","name":"O sinistro pode ser solucionado por meio de uma das contratadas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":740.0,"y":520.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a874cc68-3f5b-4f72-a8c8-85f731b4d9c6","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":702.0,"y":618.0}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2b9c8188-9b0a-43ae-a86a-4cf31903c808","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":715.0,"y":860.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5cb8e96-9c79-4ee4-8fc8-5ecfea5062dd","name":"Empresa responsável solucionou o sinistro?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":740.0,"y":983.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e06382ef-b746-42b3-9fc1-39261b4b9294","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":715.0,"y":1107.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9208fd7-878a-4eb0-b1a9-8fc197d29cb3","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":905.0,"y":973.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"41633740-2190-4819-99c8-21fe0f93b9fc","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":308.0,"y":510.0}],"radius":0.0,"height":60.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2f3b790b-36d5-4f4d-a2da-1d6068c45d58","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":469.0,"y":1321.0}],"radius":0.0,"height":60.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99024fd4-c84a-470f-be20-1f1a2eb80939","name":"Inserir documento 033 - Parecer Procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":467.0,"y":1498.0}],"radius":0.0,"height":60.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"caefdde0-d770-4f27-8e8e-77fab3c2b1e3","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1318.5,"y":1327.7}],"radius":0.0,"height":60.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7cae9264-3829-4170-89a9-87cece98c6f3","name":"Realizar ações necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1327.0,"y":701.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5fa92a94-8618-4036-b878-e95366da5e72","name":"Incluir documento 036 - Análise e Deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1313.0,"y":552.0}],"radius":0.0,"height":79.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1c0be26e-6e9c-47ac-b5a9-4b925aa7e78c","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1492.0,"y":632.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"712e427b-0537-4ac4-8f87-57680527ebbf","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1492.0,"y":1710.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2e2d52f8-6f98-4317-8b0d-f9ea3f2696f2","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1678.0,"y":1725.7}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b673c50c-6955-4a72-8f8c-b7b33f77da6a","name":"Pró-reitoria competente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":447.8}],"radius":0.0,"height":357.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c376aff2-ab2b-4983-9446-d1d906efc9a2","name":"Departamento competente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":805.0}],"radius":0.0,"height":461.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7c945cd5-3afc-480e-82c3-5c30cec3d833","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1438.3999}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b6e826ee-9023-40fd-b922-b9a20979f7bc","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1638.3999}],"radius":0.0,"height":200.299927,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"64fc5b41-b03e-4a25-958b-0a0269b7d483","containerName":"[PROAD] 25 Registrar processo de sinistro","isSubprocess":false,"elements":[{"id":"ba6270e8-99f4-4b16-87a6-168e9b2f3375","value":"[PROAD] 25 Registrar processo de sinistro"},{"id":"57d8ec68-05e8-4bab-9058-42f4c6c63956","value":"Interessado"},{"id":"ef9a8643-b8ec-4fb7-ab63-4c253a6f71a9","value":"DIPROT"},{"id":"b673c50c-6955-4a72-8f8c-b7b33f77da6a","value":"Pró-reitoria competente"},{"id":"c376aff2-ab2b-4983-9446-d1d906efc9a2","value":"Departamento competente"},{"id":"90c2c290-04de-473e-875b-03fd46831cf9","value":"REITORIA"},{"id":"7c945cd5-3afc-480e-82c3-5c30cec3d833","value":"PFUFCSPA"},{"id":"b6e826ee-9023-40fd-b922-b9a20979f7bc","value":"DIARQ"},{"id":"da5a8ebd-896b-4e00-bd02-a9fc35922fbb","value":""},{"id":"8e854ee1-35b8-4cb5-bea4-b5c12809ac92","value":"Abrir processo de sinistro"},{"id":"c7bcab58-dd7c-4d53-b1ae-29430b5c462d","value":"Incluir documento 303 - Formulário de registro de sinistro"},{"id":"2c3c6aa0-0452-43af-aa7d-7f854f591003","value":"Incluir em PDF comprovante de ocorrência do sinistro"},{"id":"16125650-11c8-44bb-8688-b0bc12052d22","value":"Incluir documento 872 - Despacho simples"},{"id":"d7d58bc2-ab86-478f-9f2e-fd932592de59","value":"O sinistro pode ser solucionado por meio de uma das contratadas?"},{"id":"a874cc68-3f5b-4f72-a8c8-85f731b4d9c6","value":"Incluir documento 011 - Ofício"},{"id":"41633740-2190-4819-99c8-21fe0f93b9fc","value":"Incluir documento 872 - Despacho simples"},{"id":"2b9c8188-9b0a-43ae-a86a-4cf31903c808","value":"Incluir documento 011 - Ofício"},{"id":"d5cb8e96-9c79-4ee4-8fc8-5ecfea5062dd","value":"Empresa responsável solucionou o sinistro?"},{"id":"d9208fd7-878a-4eb0-b1a9-8fc197d29cb3","value":"Incluir documento 011 - Ofício"},{"id":"e06382ef-b746-42b3-9fc1-39261b4b9294","value":"Incluir documento 011 - Ofício"},{"id":"2f3b790b-36d5-4f4d-a2da-1d6068c45d58","value":"Incluir documento 872 - Despacho simples"},{"id":"99024fd4-c84a-470f-be20-1f1a2eb80939","value":"Inserir documento 033 - Parecer Procuradoria"},{"id":"caefdde0-d770-4f27-8e8e-77fab3c2b1e3","value":"Incluir documento 872 - Despacho simples"},{"id":"5fa92a94-8618-4036-b878-e95366da5e72","value":"Incluir documento 036 - Análise e Deliberação"},{"id":"712e427b-0537-4ac4-8f87-57680527ebbf","value":"Realizar tratamento arquivístico"},{"id":"2e2d52f8-6f98-4317-8b0d-f9ea3f2696f2","value":""},{"id":"e50373bc-3f35-4575-80ca-657faea27bf5","value":"Liberar acesso externo para o interessado"},{"id":"0f26baa0-f548-4e1b-abeb-46627d95b529","value":"Interessado é usuário externo?"},{"id":"7cae9264-3829-4170-89a9-87cece98c6f3","value":"Realizar ações necessárias"},{"id":"1c0be26e-6e9c-47ac-b5a9-4b925aa7e78c","value":"Comunicar interessado"},{"id":"344d375e-92ae-4c0e-ac44-d79a0ffb0c77"},{"id":"c6634083-71c5-452e-8095-64b80b60486b"},{"id":"f1f7a95a-85cf-43ea-a3e5-d1828f874554"},{"id":"c2c54038-c783-4c71-ac99-b636b8a89f02"},{"id":"1d574418-f420-4776-990e-970e5c66b8ae"},{"id":"c4ea1a10-0712-41bf-80ad-3abed36b89ce"},{"id":"e303b08b-9005-484f-9c05-0492e7b297a3"},{"id":"b5f25e18-456a-4b24-bd4c-8ff6deaaf950"},{"id":"6d108180-d419-4715-85ac-7197eab8d75c"},{"id":"b6a41130-0f1c-480c-92b6-cd9b9cf750ca"},{"id":"96598e73-d2bc-4f36-aa82-1d8cc49ea014"},{"id":"6642bcba-0ad4-4e77-b65e-052264f989f1"},{"id":"778e9695-2be5-447e-afa0-91e1d656bfa1"},{"id":"a9863260-39fe-4575-8215-0b0b3f1d585c"},{"id":"993c49bd-a1ea-4bf3-ae4b-ef70309d6bf5"},{"id":"eee72677-8a5e-46a0-a5b0-d1fa4332ae07"},{"id":"9c6450de-b670-4d37-b591-dcfe91b667f3"},{"id":"5be2fe1c-ec0f-4029-9a05-be08c0f0b5aa"},{"id":"b66a37d7-489d-4194-816c-3640179171de"},{"id":"3f9ec3f5-ef04-497c-9832-8a01e14c8153"},{"id":"fa66cf55-6e25-4740-9b3c-9b2d7bad8be1"},{"id":"995079cb-67a3-4667-825d-cc5bbf701056"},{"id":"f5fb7b80-35c7-454e-ac27-5610e88ac4a5"},{"id":"6c65bc25-2414-4a2e-a5e8-83d84ae44d95"},{"id":"8fa01bab-4ca2-4ef3-bcf0-c22eff5b4ab7"},{"id":"7d0fc41e-e49e-4e59-8022-58c299dbb8e9"}]}]}