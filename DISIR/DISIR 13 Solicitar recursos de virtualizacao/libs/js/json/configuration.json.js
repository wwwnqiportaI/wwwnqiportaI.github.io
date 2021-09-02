Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DISIR] 13 Solicitar recursos de virtualização","publishDate":"02/09/2021 14:18:08","pages":[{"id":"f0f478c7-1a34-4ceb-99d9-c50edcc23176","name":"[DISIR] 13 Solicitar recursos de virtualização","version":"1.0","author":"thiagom","image":"files\\diagrams\\DISIR]_13_Solicitar_recursos_de_virtualizacao.png","isSubprocessPage":false,"elements":[{"id":"3f0552d6-71bd-4050-93e4-b4bed23ed65b","name":"[DISIR] 13 Solicitar recursos de virtualização","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":560.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d58fb8fd-31d0-4cd7-b25f-357fa95db52a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":123.0,"y":50.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"8fb3502d-607d-43fb-81ac-d886acd978e8","name":"Solicitar recursos de virtualização via sistema chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":228.5,"y":41.5}],"radius":0.0,"height":47.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3a1d8cd6-cf79-4e41-8194-79742ebcf3b7","name":"Receber  chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":245.0,"y":201.0}],"radius":0.0,"height":62.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aea82514-e291-4cab-a2ac-e0fc85b22ce2","name":"Formulário contém todas as informações necessárias?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":270.0,"y":315.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"503b4184-332b-4dad-8995-f0283457c05c","name":"Solicitar informações adicionais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":125.0,"y":202.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"67aa7129-eac5-4b01-9473-cd8697eb247d","name":"Complementar informações solicitadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":125.0,"y":93.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b578200c-de49-434d-b8ce-abf4d5c7d2a1","name":"Analisar a solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":245.0,"y":440.0}],"radius":0.0,"height":74.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1bd6d25e-994d-4d9e-8ecc-e2d44b77ffa0","name":"Criar nova máquina virtual?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":520.0,"y":457.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"88b3f964-fc39-4d55-9830-f31ed2b1e3d6","name":"Aplicar alteração  conforme solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":289.0}],"radius":0.0,"height":80.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bf5be6f3-8996-4229-a522-c28ff985801e","name":"VM está executando?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":756.0,"y":309.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b5e896f5-6d1f-45bd-be8c-b62a034c0618","name":"Verificar erro  apresentado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":731.0,"y":190.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7a539c6f-2561-4259-ad87-5a4fc8b6e949","name":"Corrigir erro  encontrado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":495.0,"y":190.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"28bfbc45-d67d-42f0-b444-f3b3f2674b04","name":"[DISIR] 03-01 Criar máquina virtual","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":744.0,"y":447.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DISIR/DISIR%2003%20Administrar%20Sistemas%20de%20virtualizacao/#diagram/52161fef-ed2c-4c50-ab92-bdd89e23aa2d","type":"url"}},{"id":"ee2a5ac3-9588-4d6d-8742-99f5bffbe0da","name":"Informar que a solicitação foi atendida","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":887.0,"y":299.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"af6337a7-7220-4600-a384-ae616905c9e6","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1030.0,"y":314.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"7ed19d24-f6cc-4569-8f46-d6b528a1d9dd","name":"Unidade interessada","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":151.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"953cf471-ff52-48c1-9b76-f9134f298349","name":"DISIR","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":171.0}],"radius":0.0,"height":409.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"f0f478c7-1a34-4ceb-99d9-c50edcc23176","containerName":"[DISIR] 13 Solicitar recursos de virtualização","isSubprocess":false,"elements":[{"id":"3f0552d6-71bd-4050-93e4-b4bed23ed65b","value":"[DISIR] 13 Solicitar recursos de virtualização"},{"id":"7ed19d24-f6cc-4569-8f46-d6b528a1d9dd","value":"Unidade interessada"},{"id":"953cf471-ff52-48c1-9b76-f9134f298349","value":"DISIR"},{"id":"d58fb8fd-31d0-4cd7-b25f-357fa95db52a","value":""},{"id":"8fb3502d-607d-43fb-81ac-d886acd978e8","value":"Solicitar recursos de virtualização via sistema chamado"},{"id":"aea82514-e291-4cab-a2ac-e0fc85b22ce2","value":"Formulário contém todas as informações necessárias?"},{"id":"503b4184-332b-4dad-8995-f0283457c05c","value":"Solicitar informações adicionais"},{"id":"3a1d8cd6-cf79-4e41-8194-79742ebcf3b7","value":"Receber  chamado"},{"id":"b578200c-de49-434d-b8ce-abf4d5c7d2a1","value":"Analisar a solicitação"},{"id":"1bd6d25e-994d-4d9e-8ecc-e2d44b77ffa0","value":"Criar nova máquina virtual?"},{"id":"28bfbc45-d67d-42f0-b444-f3b3f2674b04","value":"[DISIR] 03-01 Criar máquina virtual"},{"id":"88b3f964-fc39-4d55-9830-f31ed2b1e3d6","value":"Aplicar alteração  conforme solicitado"},{"id":"ee2a5ac3-9588-4d6d-8742-99f5bffbe0da","value":"Informar que a solicitação foi atendida"},{"id":"bf5be6f3-8996-4229-a522-c28ff985801e","value":"VM está executando?"},{"id":"b5e896f5-6d1f-45bd-be8c-b62a034c0618","value":"Verificar erro  apresentado"},{"id":"af6337a7-7220-4600-a384-ae616905c9e6","value":""},{"id":"7a539c6f-2561-4259-ad87-5a4fc8b6e949","value":"Corrigir erro  encontrado"},{"id":"67aa7129-eac5-4b01-9473-cd8697eb247d","value":"Complementar informações solicitadas"},{"id":"f116c63e-a0fe-4e7f-941f-c34825cfcad8"},{"id":"4c15a775-73c0-42ce-94f8-bcad675a1ca1"},{"id":"6dda40ee-8b95-40d5-9e2b-2b7ab69ee97e"},{"id":"2ddc46f3-9b0f-48b3-990c-c96cbd020958"}]}]}