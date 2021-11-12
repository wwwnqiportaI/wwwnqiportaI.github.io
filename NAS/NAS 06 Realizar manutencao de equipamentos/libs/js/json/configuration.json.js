Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NAS] 06 Realizar manutenção de equipamentos","publishDate":"12/11/2021 11:29:35","pages":[{"id":"e59733a4-f67b-47a5-9760-1f252e7a0325","name":"[NAS] 06 Realizar manutenção de equipamentos","version":"1.0","author":"izado","image":"files\\diagrams\\NAS]_06_Realizar_manutencao_de_equipamentos.png","isSubprocessPage":false,"elements":[{"id":"01ca13f0-c228-4b00-9df5-1bb2dbd82d3f","name":"[NAS] 06 Realizar manutenção de equipamentos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":861.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"877e57d1-8c9d-4e68-83d3-fa813a2fe507","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":116.0,"y":99.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5ee6cb46-4547-4ab9-a06d-b629a100f333","name":"Enviar pedido de manutenção por e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":177.0,"y":80.0}],"radius":0.0,"height":69.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e6862fae-f697-4791-abd7-dc854453df0d","name":"Avaliar o pedido in loco","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":171.0,"y":460.0}],"radius":0.0,"height":86.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f3d6ed4-51a2-420b-ba85-9d62514b3a53","name":"Necessita manutenção?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.0,"y":483.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"6bcd39e7-1376-4dcf-b31f-92aadb8bf720","name":"Definir responsável pela manutenção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":420.0,"y":469.0}],"radius":0.0,"height":69.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0b47dd6-9233-4bf5-8834-c4a8bb7c5dcd","name":"Setor responsável","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":591.0,"y":483.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Prefeitura do Campus","elementType":"SequenceFlow","properties":[]},{"name":"Coordenação de Engenharia","elementType":"SequenceFlow","properties":[]},{"name":"Núcleo de Apoio a Salas","elementType":"SequenceFlow","properties":[]},{"name":"Núcleo de Tecnologia da Informação","elementType":"SequenceFlow","properties":[]}]},{"id":"e2b332fc-7dd3-4674-a03c-1469c363a40b","name":"Abrir chamado  no Pedidos Internos -   PREF","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":829.5,"y":471.0}],"radius":0.0,"height":65.0,"width":176.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4642e13d-fffc-43cd-b50a-726de8762c56","name":"Abrir chamado no Pedidos Internos - CENG","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":840.0,"y":637.0}],"radius":0.0,"height":53.0,"width":155.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9db8bb07-8ba1-4ca7-b10b-15ed58157fa3","name":"Realizar a manutenção ou troca do equipamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":845.5,"y":794.0}],"radius":0.0,"height":53.0,"width":144.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d7bc62a-4dab-4acf-8a6d-b21eb9f7c94d","name":"Abrir chamado  no Pedidos Internos - NTI ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":838.0,"y":307.0}],"radius":0.0,"height":63.0,"width":159.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f7a25a23-b6f3-4601-ba12-8e1eb778cbd6","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1184.0,"y":488.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"25494c4a-a5de-4637-ad17-3bba3f96de87","name":"Comunidade Interna","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0beeb0c1-72a6-4cea-8a4e-568fabf3a63a","name":"Núcleo de Apoio a Salas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":661.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"e59733a4-f67b-47a5-9760-1f252e7a0325","containerName":"[NAS] 06 Realizar manutenção de equipamentos","isSubprocess":false,"elements":[{"id":"01ca13f0-c228-4b00-9df5-1bb2dbd82d3f","value":"[NAS] 06 Realizar manutenção de equipamentos"},{"id":"25494c4a-a5de-4637-ad17-3bba3f96de87","value":"Comunidade Interna"},{"id":"0beeb0c1-72a6-4cea-8a4e-568fabf3a63a","value":"Núcleo de Apoio a Salas"},{"id":"e6862fae-f697-4791-abd7-dc854453df0d","value":"Avaliar o pedido in loco"},{"id":"6d7bc62a-4dab-4acf-8a6d-b21eb9f7c94d","value":"Abrir chamado  no Pedidos Internos - NTI "},{"id":"e2b332fc-7dd3-4674-a03c-1469c363a40b","value":"Abrir chamado  no Pedidos Internos -   PREF"},{"id":"8f3d6ed4-51a2-420b-ba85-9d62514b3a53","value":"Necessita manutenção?"},{"id":"f7a25a23-b6f3-4601-ba12-8e1eb778cbd6","value":""},{"id":"9db8bb07-8ba1-4ca7-b10b-15ed58157fa3","value":"Realizar a manutenção ou troca do equipamento"},{"id":"6bcd39e7-1376-4dcf-b31f-92aadb8bf720","value":"Definir responsável pela manutenção"},{"id":"e0b47dd6-9233-4bf5-8834-c4a8bb7c5dcd","value":"Setor responsável"},{"id":"4642e13d-fffc-43cd-b50a-726de8762c56","value":"Abrir chamado no Pedidos Internos - CENG"},{"id":"877e57d1-8c9d-4e68-83d3-fa813a2fe507","value":""},{"id":"5ee6cb46-4547-4ab9-a06d-b629a100f333","value":"Enviar pedido de manutenção por e-mail"},{"id":"e77d0b71-969b-49b0-8de4-fcf432cc6a48"},{"id":"08ca3723-7d98-47f6-9a14-4f96c00168b5"},{"id":"2228ff2e-f4af-4dc3-8bd2-c828dbb30000"},{"id":"a7b473b6-a72d-4062-b5e4-394853515b0f"},{"id":"f9e82db5-007c-4f9e-8424-aafc69dda409"},{"id":"73941940-24b9-43ff-b0a5-f07cc105b77b"},{"id":"bee0f2e3-b4c4-4f4a-ad5e-05022a1eca27"},{"id":"fc48a17f-0868-4303-a12e-c8b1f7ec6b62"},{"id":"59ca9b35-bdfa-4a44-915f-0bf4c875a4c9"},{"id":"f05b7747-6199-41da-be7b-b85f5dd5a0da"},{"id":"daa36c99-d69b-4923-8480-1ba37c8d166e"},{"id":"7cf38557-05ee-42d9-a30f-be3cdedc4e38"}]}]}