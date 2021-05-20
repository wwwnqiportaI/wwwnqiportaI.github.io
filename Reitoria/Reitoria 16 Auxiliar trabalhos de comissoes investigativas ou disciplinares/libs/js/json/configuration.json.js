Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares","publishDate":"20/05/2021 15:20:09","pages":[{"id":"7aeec43b-673c-49de-8988-38bb74956854","name":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares","version":"1.0","author":"ariel","image":"files\\diagrams\\Reitoria]_16_Auxiliar_trabalhos_de_comissoes_investigativas_ou_disciplinares.png","isSubprocessPage":false,"elements":[{"id":"47bdf90f-facf-4200-92bd-a30c842c176a","name":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1195.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"da7bcf39-0038-4d55-a26a-54e3a034ebdc","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":149.0,"y":376.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"9e466568-a26b-4628-bb07-e816b9e776b4","name":"Verificar tipo de processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":223.0,"y":361.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2ff08fe4-66bd-49fb-a761-75bc86ba5ed7","name":"Tipo de processo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":374.0,"y":371.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"PAD","elementType":"SequenceFlow","properties":[]},{"name":"IPS, SINVE ou SINPA","elementType":"SequenceFlow","properties":[]}]},{"id":"b30e8f64-536e-46e5-a00a-f9ba056c75da","name":"Abrir processo auxiliar de PAD","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":509.0,"y":496.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"155f721a-abce-483f-8f11-d7ab403c5833","name":"Necessita designação de secretário?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":654.0,"y":506.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"48a9922f-3dc5-4e74-8c6a-b3b6ef54396e","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":629.0,"y":623.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"888ba14b-58cd-4289-b1c2-e96e9a49e2d1","name":"Enviar processo para a APS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":629.0,"y":713.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4c5eb154-7a94-4e4b-a536-38153e10b8bf","name":"Incluir documento 936 - Portaria PAD e sindicâncias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":622.0,"y":1083.0}],"radius":0.0,"height":71.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6ad6032a-0063-4b9f-9bac-ed3baada077e","name":"Auxiliar trabalhos da comissão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":791.0,"y":366.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"697acfdf-4d9d-42a8-b647-53840e5dba0b","name":"Precisa de informações de outras unidades?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":980.0,"y":376.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"4206c98d-1ed7-42c8-ae7c-d885f452b1a3","name":"Precisa de prorrogação, recondução, sobrestamento ou interrupção?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1176.0,"y":289.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"52832d21-ce0c-4fc4-b12e-c4b9311f286e","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1246.0,"y":463.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2ff8f4a9-b427-4b99-86b1-ceb48891beb9","name":"Enviar processo para a APS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1246.0,"y":587.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"897d4557-6617-40ae-9246-7d8b33ec48af","name":"Incluir documento 936 - Portaria PAD e sindicâncias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1239.0,"y":1081.0}],"radius":0.0,"height":71.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"75713c33-328b-4fa8-b7cf-b99ae7755d73","name":"Aguardar finalização da  investigação ou processo disciplinar","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1323.0,"y":116.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"9aae19e4-f833-4b3a-9ea8-c3f3f6e811b0","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1463.0,"y":116.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"41492238-066c-4756-96f4-117f079b5b51","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":955.0,"y":488.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cded70d7-b52d-4fe8-bdc0-224fe77e184b","name":"Enviar processo para a unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":955.0,"y":596.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f268988-141c-45da-9389-e33b324f63aa","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":955.0,"y":842.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"18319434-de02-4932-924b-9e84236e990a","name":"Incluir demais documentos solicitados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":955.0,"y":930.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1a25827f-a2d3-4b75-963e-becd26bf336c","name":"Abrir processo  auxiliar para  IPS, SINPA ou SINVE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":529.0,"y":228.0}],"radius":0.0,"height":93.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"732d2abd-edc0-4512-85aa-13a468e0ce39","name":"Servidor designado/ Comissão","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":795.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3fce8142-4e83-456a-8316-aa8bac95ae72","name":"Unidade","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":815.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bca506bb-a791-4662-a452-871c0ddbb2d9","name":"APS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1015.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7aeec43b-673c-49de-8988-38bb74956854","containerName":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares","isSubprocess":false,"elements":[{"id":"47bdf90f-facf-4200-92bd-a30c842c176a","value":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares"},{"id":"732d2abd-edc0-4512-85aa-13a468e0ce39","value":"Servidor designado/ Comissão"},{"id":"3fce8142-4e83-456a-8316-aa8bac95ae72","value":"Unidade"},{"id":"bca506bb-a791-4662-a452-871c0ddbb2d9","value":"APS"},{"id":"da7bcf39-0038-4d55-a26a-54e3a034ebdc","value":""},{"id":"b30e8f64-536e-46e5-a00a-f9ba056c75da","value":"Abrir processo auxiliar de PAD"},{"id":"2ff08fe4-66bd-49fb-a761-75bc86ba5ed7","value":"Tipo de processo"},{"id":"9e466568-a26b-4628-bb07-e816b9e776b4","value":"Verificar tipo de processo"},{"id":"1a25827f-a2d3-4b75-963e-becd26bf336c","value":"Abrir processo  auxiliar para  IPS, SINPA ou SINVE"},{"id":"155f721a-abce-483f-8f11-d7ab403c5833","value":"Necessita designação de secretário?"},{"id":"48a9922f-3dc5-4e74-8c6a-b3b6ef54396e","value":"Incluir documento 011 - Ofício"},{"id":"888ba14b-58cd-4289-b1c2-e96e9a49e2d1","value":"Enviar processo para a APS"},{"id":"4c5eb154-7a94-4e4b-a536-38153e10b8bf","value":"Incluir documento 936 - Portaria PAD e sindicâncias"},{"id":"6ad6032a-0063-4b9f-9bac-ed3baada077e","value":"Auxiliar trabalhos da comissão"},{"id":"1f268988-141c-45da-9389-e33b324f63aa","value":"Incluir documento 011 - Ofício"},{"id":"18319434-de02-4932-924b-9e84236e990a","value":"Incluir demais documentos solicitados"},{"id":"897d4557-6617-40ae-9246-7d8b33ec48af","value":"Incluir documento 936 - Portaria PAD e sindicâncias"},{"id":"9aae19e4-f833-4b3a-9ea8-c3f3f6e811b0","value":""},{"id":"75713c33-328b-4fa8-b7cf-b99ae7755d73","value":"Aguardar finalização da  investigação ou processo disciplinar"},{"id":"4206c98d-1ed7-42c8-ae7c-d885f452b1a3","value":"Precisa de prorrogação, recondução, sobrestamento ou interrupção?"},{"id":"52832d21-ce0c-4fc4-b12e-c4b9311f286e","value":"Incluir documento 011 - Ofício"},{"id":"41492238-066c-4756-96f4-117f079b5b51","value":"Incluir documento 011 - Ofício"},{"id":"697acfdf-4d9d-42a8-b647-53840e5dba0b","value":"Precisa de informações de outras unidades?"},{"id":"cded70d7-b52d-4fe8-bdc0-224fe77e184b","value":"Enviar processo para a unidade"},{"id":"2ff8f4a9-b427-4b99-86b1-ceb48891beb9","value":"Enviar processo para a APS"},{"id":"60cd5ddf-c499-4e23-8b49-6c5c4996364e"},{"id":"0e36ea21-b99d-46af-b03b-f28d9dd8967e"},{"id":"3d7abaaf-686c-4fb7-932a-7a35289aa49c"},{"id":"4fc7b196-e987-4515-96f0-71bfc0d04e3e"},{"id":"8c4cbaf7-734a-47c9-9873-73ca1d8d37b5"},{"id":"07b74427-d6b3-4fda-b7e3-03500ef3681c"},{"id":"1b8a7d53-36c2-49e4-ba4b-705eb3c7ef37"},{"id":"1d166d39-69d6-41f9-9a2c-273d8c21c358"},{"id":"bce8d8a1-a8cd-4322-8221-d2c1eb46ba0b"},{"id":"77d561a9-b4db-4815-a350-0d5f9f9cdbb7"},{"id":"3a6ec66e-4bdd-4a89-8319-cf93f54b938f"}]}]}