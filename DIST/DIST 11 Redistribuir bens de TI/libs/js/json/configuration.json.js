Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIST] 11 Redistribuir bens de TI","publishDate":"29/07/2022 08:29:55","pages":[{"id":"62529ba6-d946-4e3b-8a28-f3ba8d28ea14","name":"[DIST] 11 Redistribuir bens de TI","version":"1.0","author":"eltonf","image":"files\\diagrams\\DIST]_11_Redistribuir_bens_de_TI.png","isSubprocessPage":false,"elements":[{"id":"5b69ee0b-28c8-4ebb-ba49-5b191a1f1fde","name":"[DIST] 11 Redistribuir bens de TI","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":940.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c99bc776-dc0c-4486-8387-876826fb0529","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":135.0,"y":72.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5b74dd5f-67fb-4cda-bd66-e51773374f74","name":"Encaminhar pedido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":57.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"41b9bde6-2d5f-4345-ab08-70b30812a244","name":"Receber pedido","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":348.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"49c939a2-dc68-41fc-9bbe-7bda5933973b","name":"Preparar bens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":444.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5200cbae-4959-4736-98da-f37f3983adef","name":"Bem será distribuído no campus ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":239.0,"y":559.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"83e54b27-be3d-404f-8f9e-f01432eca4d5","name":"Notificar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":488.0,"y":549.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9c38bef5-474a-450b-89e5-8f1ff49cbe57","name":"Solicitar serviço de transporte de bens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":488.0,"y":180.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1a65d068-cdf0-4716-8826-baa8700eeef3","name":"Aguardando término do transporte","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":631.0,"y":356.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"ce17070f-f6cc-407e-85b1-ff40d956f87a","name":"Fazer o transporte do bem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":655.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d481dccc-58e6-43a2-a48c-02578cb9200b","name":"Registrar dados da carga","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":761.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4f59a29c-3457-461c-9ab7-f3c234b562dd","name":"Notificar Coordenação DIST","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":865.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04252947-c2ad-4050-9cb3-690cb8d80e5e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":433.0,"y":880.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a8e6b5a6-647d-40e2-9b70-8be9b5d0e3a5","name":"PROPLAN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":133.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"84aa778d-a20f-4c89-8d34-27a721bbee72","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":153.0}],"radius":0.0,"height":136.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c25a48f1-a3ca-4e6c-906c-03389fc6c6eb","name":"DIST","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":289.0}],"radius":0.0,"height":671.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"62529ba6-d946-4e3b-8a28-f3ba8d28ea14","containerName":"[DIST] 11 Redistribuir bens de TI","isSubprocess":false,"elements":[{"id":"5b69ee0b-28c8-4ebb-ba49-5b191a1f1fde","value":"[DIST] 11 Redistribuir bens de TI"},{"id":"a8e6b5a6-647d-40e2-9b70-8be9b5d0e3a5","value":"PROPLAN"},{"id":"84aa778d-a20f-4c89-8d34-27a721bbee72","value":"Interessado"},{"id":"c25a48f1-a3ca-4e6c-906c-03389fc6c6eb","value":"DIST"},{"id":"c99bc776-dc0c-4486-8387-876826fb0529","value":""},{"id":"41b9bde6-2d5f-4345-ab08-70b30812a244","value":"Receber pedido"},{"id":"5200cbae-4959-4736-98da-f37f3983adef","value":"Bem será distribuído no campus ?"},{"id":"ce17070f-f6cc-407e-85b1-ff40d956f87a","value":"Fazer o transporte do bem"},{"id":"d481dccc-58e6-43a2-a48c-02578cb9200b","value":"Registrar dados da carga"},{"id":"4f59a29c-3457-461c-9ab7-f3c234b562dd","value":"Notificar Coordenação DIST"},{"id":"9c38bef5-474a-450b-89e5-8f1ff49cbe57","value":"Solicitar serviço de transporte de bens"},{"id":"5b74dd5f-67fb-4cda-bd66-e51773374f74","value":"Encaminhar pedido"},{"id":"49c939a2-dc68-41fc-9bbe-7bda5933973b","value":"Preparar bens"},{"id":"83e54b27-be3d-404f-8f9e-f01432eca4d5","value":"Notificar interessado"},{"id":"04252947-c2ad-4050-9cb3-690cb8d80e5e","value":""},{"id":"1a65d068-cdf0-4716-8826-baa8700eeef3","value":"Aguardando término do transporte"},{"id":"dcc88e01-7591-404d-a1d4-b09dddb41353"},{"id":"9b6230b0-3f29-4c1c-829a-acdecbf78c64"},{"id":"06ede7b3-ee27-4cff-b4dd-103f9e919b32"},{"id":"2779aef1-c787-4876-807f-43e350a40ad2"},{"id":"e84e7ab8-0ed6-4642-b9a0-7d582a6851c0"},{"id":"4af9c58e-6ad5-4a92-8cc7-0bb4b2a1b7b4"},{"id":"6bbeb0f7-7945-4380-8c5a-555c9e84d4d3"},{"id":"ae538bc0-2eb1-4aea-aecc-c26050b98b83"},{"id":"e1be40c4-1297-4b24-826f-1a3358880a79"},{"id":"9b1448de-2055-47a1-bddc-d1eccc6379b3"},{"id":"ce6be7bc-fc3b-41d2-80e0-3af4db8b31da"},{"id":"268465b1-d15c-4777-ab57-3fb386174260"}]}]}