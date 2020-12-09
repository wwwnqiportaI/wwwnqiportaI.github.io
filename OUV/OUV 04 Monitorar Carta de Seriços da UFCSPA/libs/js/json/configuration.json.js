Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[OUV] 04 Monitorar Carta de Seriços da UFCSPA","publishDate":"08/12/2020 22:58:00","pages":[{"id":"20de22dd-a9b3-4e75-9c98-5e1ee68feac5","name":"[OUV] 04 Monitorar Carta de Serviços da UFCSPA","version":"1.0","author":"Luciano","image":"files\\diagrams\\OUV]_04_Monitorar_Carta_de_Servicos_da_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"c4ff4bb2-846d-4e3f-8586-4660a8aff31e","name":"[OUV] 04 Monitorar Carta de Serviços da UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":550.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"75de9935-e3c7-40db-b546-f9acefc41c4e","name":"Periodicamente","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Carta de Servi&ccedil;os da UFCSPA.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":152.0,"y":152.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"bda4e686-70e8-479a-bffc-fc68d0ef50be","name":"Acessar a Carta de Serviços da UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":230.0,"y":137.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c0984e9a-6970-41f3-ad5d-6665c0148460","name":"Revisar as informações disponíveis","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":377.0,"y":137.0}],"radius":0.0,"height":61.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"796aa298-b701-46e3-8335-b34692224f3c","name":"Informações completas e atualizadas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":592.0,"y":147.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d9e99d79-78ce-464e-aa0e-1760d05188d8","name":"Comunicar setor responsável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":567.0,"y":283.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5e65501a-5970-4c9e-b380-72b003d28bd3","name":"Providenciar  adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":567.0,"y":449.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d6dec8b-2220-495c-8080-89eb1f6b69f8","name":"Comunicar Ouvidoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.0,"y":449.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"83b0efcd-f9fc-4f1f-9d9c-6a7aa846e8e1","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DAS: Carta de Servi&ccedil;os da UFCSPA completa e atuallizada.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":769.0,"y":152.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"5d1329f8-0352-4827-8590-6c96889a641b","name":"Ouvidoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b2e25997-8a4c-414d-a6d7-bb71c585b6d3","name":"Setor da UFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":370.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"20de22dd-a9b3-4e75-9c98-5e1ee68feac5","containerName":"[OUV] 04 Monitorar Carta de Serviços da UFCSPA","isSubprocess":false,"elements":[{"id":"c4ff4bb2-846d-4e3f-8586-4660a8aff31e","value":"[OUV] 04 Monitorar Carta de Serviços da UFCSPA"},{"id":"5d1329f8-0352-4827-8590-6c96889a641b","value":"Ouvidoria"},{"id":"b2e25997-8a4c-414d-a6d7-bb71c585b6d3","value":"Setor da UFCSPA"},{"id":"75de9935-e3c7-40db-b546-f9acefc41c4e","value":"Periodicamente"},{"id":"bda4e686-70e8-479a-bffc-fc68d0ef50be","value":"Acessar a Carta de Serviços da UFCSPA"},{"id":"c0984e9a-6970-41f3-ad5d-6665c0148460","value":"Revisar as informações disponíveis"},{"id":"796aa298-b701-46e3-8335-b34692224f3c","value":"Informações completas e atualizadas?"},{"id":"d9e99d79-78ce-464e-aa0e-1760d05188d8","value":"Comunicar setor responsável"},{"id":"5e65501a-5970-4c9e-b380-72b003d28bd3","value":"Providenciar  adequações"},{"id":"9d6dec8b-2220-495c-8080-89eb1f6b69f8","value":"Comunicar Ouvidoria"},{"id":"83b0efcd-f9fc-4f1f-9d9c-6a7aa846e8e1","value":""},{"id":"2af92596-a141-4424-b169-04fc2a89c8cf"},{"id":"0138efe3-0f9a-41f3-8f5d-d4bbb38db4fe"}]}]}