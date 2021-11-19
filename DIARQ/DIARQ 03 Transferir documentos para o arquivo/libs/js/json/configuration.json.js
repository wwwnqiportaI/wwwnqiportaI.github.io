Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIARQ] 03 Transferir documentos para o arquivo","publishDate":"19/11/2021 09:20:10","pages":[{"id":"18583e02-fd0e-4852-9064-ee0c4ab7b630","name":"[DIARQ] 03 Transferir documentos para o arquivo","version":"1.0","author":"Ufcspa","image":"files\\diagrams\\DIARQ]_03_Transferir_documentos_para_o_arquivo.png","isSubprocessPage":false,"elements":[{"id":"10862869-16e1-4077-b9a0-ad77f1f56ad6","name":"[DIARQ] 03 Transferir documentos para o arquivo","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":715.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6caa8b36-b519-4c10-a303-48d24af31ada","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":124.0,"y":135.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e64124fb-eb69-47f7-8fb8-d7fd5de3a129","name":"Abrir processo de transferência  de documentos ao arquivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":227.0,"y":115.0}],"radius":0.0,"height":71.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4bd55493-affa-4272-af91-d304954ca5fc","name":" Incluir documento 051 - Termo de transferência de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":393.0,"y":116.0}],"radius":0.0,"height":68.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"adc826f6-8253-4082-8128-1f69585fb52d","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":593.0,"y":130.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f95b7d32-eeb4-4467-8933-ae32c1096302","name":"Enviar processo para a DIARQ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":719.0,"y":215.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ae5c9857-8b0f-4e71-a671-3e6a2b1a6955","name":"Aguardar recebimento dos documentos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":749.0,"y":471.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"5040d39d-e4ee-4061-8106-556426f9bbb0","name":"[PREF] 26 Solicitar reserva de veículo institucional","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":568.0,"y":276.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/PREF/PREF%2026%20Solicitar%20reserva%20de%20ve%C3%ADculo%20institucional/#list","type":"url"}},{"id":"2f52a9f6-b181-4366-9fa4-c2a11be00448","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":744.0,"y":565.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"4580d6ed-e9e2-417b-b4a5-9dc80956adc2","name":"Analisar o termo de  a transferência ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":826.0,"y":555.0}],"radius":0.0,"height":60.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2cb1d51c-0248-43a8-a5c7-afcaefcd253b","name":"Incluir documento 872 -  Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1008.0,"y":551.0}],"radius":0.0,"height":68.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d0c99bdb-cb50-41f7-ba9a-701f3f3cbb72","name":"Termo de transferência está correto?  ","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1174.0,"y":565.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2de58958-6a2f-47b4-86a2-d156cb7ebe88","name":"Realizar ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1138.0,"y":240.0}],"radius":0.0,"height":62.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b060e8d8-d125-43bf-bebf-b554b785cce0","name":"[DIARQ] 01 Realizar  tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1306.0,"y":555.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"5b3e99f4-5c84-4c6f-bbe3-546a1ad1169a","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1479.0,"y":570.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a3c958e0-b680-49f1-a0d7-b06a15abcabe","name":"Unidade da UFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":372.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"989b7f3c-4470-4d47-993b-a3ce949452f1","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":392.0}],"radius":0.0,"height":343.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"18583e02-fd0e-4852-9064-ee0c4ab7b630","containerName":"[DIARQ] 03 Transferir documentos para o arquivo","isSubprocess":false,"elements":[{"id":"10862869-16e1-4077-b9a0-ad77f1f56ad6","value":"[DIARQ] 03 Transferir documentos para o arquivo"},{"id":"a3c958e0-b680-49f1-a0d7-b06a15abcabe","value":"Unidade da UFCSPA"},{"id":"989b7f3c-4470-4d47-993b-a3ce949452f1","value":"DIARQ"},{"id":"6caa8b36-b519-4c10-a303-48d24af31ada","value":""},{"id":"5b3e99f4-5c84-4c6f-bbe3-546a1ad1169a","value":""},{"id":"4bd55493-affa-4272-af91-d304954ca5fc","value":" Incluir documento 051 - Termo de transferência de documentos"},{"id":"4580d6ed-e9e2-417b-b4a5-9dc80956adc2","value":"Analisar o termo de  a transferência "},{"id":"2de58958-6a2f-47b4-86a2-d156cb7ebe88","value":"Realizar ajustes necessários"},{"id":"e64124fb-eb69-47f7-8fb8-d7fd5de3a129","value":"Abrir processo de transferência  de documentos ao arquivo"},{"id":"d0c99bdb-cb50-41f7-ba9a-701f3f3cbb72","value":"Termo de transferência está correto?  "},{"id":"2cb1d51c-0248-43a8-a5c7-afcaefcd253b","value":"Incluir documento 872 -  Despacho simples"},{"id":"f95b7d32-eeb4-4467-8933-ae32c1096302","value":"Enviar processo para a DIARQ"},{"id":"adc826f6-8253-4082-8128-1f69585fb52d","value":""},{"id":"ae5c9857-8b0f-4e71-a671-3e6a2b1a6955","value":"Aguardar recebimento dos documentos"},{"id":"2f52a9f6-b181-4366-9fa4-c2a11be00448","value":""},{"id":"5040d39d-e4ee-4061-8106-556426f9bbb0","value":"[PREF] 26 Solicitar reserva de veículo institucional"},{"id":"b060e8d8-d125-43bf-bebf-b554b785cce0","value":"[DIARQ] 01 Realizar  tratamento arquivístico"},{"id":"5aa68b28-1ec6-4329-b1bf-447f1ef873c0"},{"id":"b92af174-5339-4965-a83f-baa8231d090c"},{"id":"76be2e22-d364-497d-890c-e65062cb50db"},{"id":"39755f80-b67b-4b3d-a275-2d25509e23a1"},{"id":"732b60a1-ff8c-465b-81e8-898f6f55cdd2"},{"id":"2f010b91-2fc0-43d3-9f27-7d11be9403fc"},{"id":"cff9a2da-864b-42d2-a90e-d078d2bd3529"},{"id":"9104a234-4556-4aab-96ef-4034ae974a0d"}]}]}