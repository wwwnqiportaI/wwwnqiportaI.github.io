Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[UGI] 04 Divulgar programa de integridade","publishDate":"13/08/2021 11:04:31","pages":[{"id":"5b871a17-3137-4e25-b549-84be791cae20","name":"[UGI] 04 Divulgar programa de integridade","version":"1.0","author":"leandroam","image":"files\\diagrams\\UGI]_04_Divulgar_programa_de_integridade.png","isSubprocessPage":false,"elements":[{"id":"3de80ec5-2c5e-4416-ab06-cd6297ef0981","name":"[UGI] 04  Divulgar programa de integridade","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":680.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"226fef0e-dc29-4cad-85ce-3b14e3fd7d40","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":118.0,"y":245.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"2f2a8146-ba7f-4ca4-a161-be93bd4f327d","name":"Verificar meios para divulgação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":207.0,"y":230.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e231bdc0-0a86-4f39-bd5c-421073f8d2cd","name":"Escolher entre meios disponíveis","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":207.0,"y":63.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1c879580-1071-485e-8b88-c46f5ee87d5e","name":"UGI tem acesso direto aos meios?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":379.0,"y":73.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c433bebf-007b-4bf5-93a8-541d135801f2","name":"Verificar portifólio de serviços de divulgação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":348.0,"y":202.0}],"radius":0.0,"height":59.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e4dfc09-f0e0-4283-a6b5-483eefd52d8c","name":"Estabelecer contato para divulgação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":512.0,"y":200.0}],"radius":0.0,"height":63.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c2ffd6a-eec7-41ab-9109-0b4344917d7f","name":"Demanda contempla os requisitos para divulgação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":630.0,"y":539.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d29b7b58-31fb-46e5-b9a0-f36346f3bea1","name":"Necessidade de ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":777.0,"y":539.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"836c5dc6-52d3-45ca-8f7c-d1d7b99943f6","name":"Encaminhar para ajutes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":753.0,"y":418.0}],"radius":0.0,"height":60.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e5441d4e-203a-4c7c-a4c0-5ca610a65b15","name":"Realizar ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":754.0,"y":144.0}],"radius":0.0,"height":56.0,"width":87.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be3951c2-4a6c-4fb1-b0b0-afb0c8651f1a","name":"Divulgar conteúdo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":918.0,"y":525.0}],"radius":0.0,"height":68.0,"width":85.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b998cfd9-1bea-4884-9f0d-234f7ee4054e","name":"Comunicar  ausência de requisitos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1066.0,"y":612.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"464add1f-822f-4e8d-b6af-f2a477434fd3","name":"Realizar divulgação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":661.0,"y":63.0}],"radius":0.0,"height":60.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3561476d-a8c8-4b33-b215-b494674fc71f","name":"Salvar registro do conteúdo divulgado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":913.0,"y":60.0}],"radius":0.0,"height":66.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86f6b130-b96c-4f36-94c1-ca4367aaeacb","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1096.0,"y":78.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e0def4a7-823e-48e7-8744-6c837cc626d0","name":"Unidade de Gestão da Integridade","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":386.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f500f40c-f2b8-44f6-b396-080b7cc41134","name":"Assessoria de Comunicação","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":406.0}],"radius":0.0,"height":294.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"5b871a17-3137-4e25-b549-84be791cae20","containerName":"[UGI] 04 Divulgar programa de integridade","isSubprocess":false,"elements":[{"id":"3de80ec5-2c5e-4416-ab06-cd6297ef0981","value":"[UGI] 04  Divulgar programa de integridade"},{"id":"e0def4a7-823e-48e7-8744-6c837cc626d0","value":"Unidade de Gestão da Integridade"},{"id":"f500f40c-f2b8-44f6-b396-080b7cc41134","value":"Assessoria de Comunicação"},{"id":"226fef0e-dc29-4cad-85ce-3b14e3fd7d40","value":""},{"id":"2f2a8146-ba7f-4ca4-a161-be93bd4f327d","value":"Verificar meios para divulgação "},{"id":"e231bdc0-0a86-4f39-bd5c-421073f8d2cd","value":"Escolher entre meios disponíveis"},{"id":"1c879580-1071-485e-8b88-c46f5ee87d5e","value":"UGI tem acesso direto aos meios?"},{"id":"464add1f-822f-4e8d-b6af-f2a477434fd3","value":"Realizar divulgação"},{"id":"c433bebf-007b-4bf5-93a8-541d135801f2","value":"Verificar portifólio de serviços de divulgação"},{"id":"1e4dfc09-f0e0-4283-a6b5-483eefd52d8c","value":"Estabelecer contato para divulgação"},{"id":"6c2ffd6a-eec7-41ab-9109-0b4344917d7f","value":"Demanda contempla os requisitos para divulgação?"},{"id":"d29b7b58-31fb-46e5-b9a0-f36346f3bea1","value":"Necessidade de ajustes?"},{"id":"b998cfd9-1bea-4884-9f0d-234f7ee4054e","value":"Comunicar  ausência de requisitos"},{"id":"836c5dc6-52d3-45ca-8f7c-d1d7b99943f6","value":"Encaminhar para ajutes"},{"id":"be3951c2-4a6c-4fb1-b0b0-afb0c8651f1a","value":"Divulgar conteúdo"},{"id":"3561476d-a8c8-4b33-b215-b494674fc71f","value":"Salvar registro do conteúdo divulgado"},{"id":"86f6b130-b96c-4f36-94c1-ca4367aaeacb","value":""},{"id":"e5441d4e-203a-4c7c-a4c0-5ca610a65b15","value":"Realizar ajustes necessários"},{"id":"3aaa7c35-77d2-4765-9c07-43a171deff91"},{"id":"40ba269a-b569-4ecf-9a31-4f89e4e95128"},{"id":"de0e2da8-774f-495d-82b1-fa689a95eaeb"},{"id":"db3617b4-28d0-4824-8a96-27ba1fa37a66"}]}]}