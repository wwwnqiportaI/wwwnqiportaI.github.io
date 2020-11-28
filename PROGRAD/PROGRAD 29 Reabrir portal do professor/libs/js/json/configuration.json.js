Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROGRAD] 29 Reabrir portal do professor","publishDate":"27/11/2020 23:29:55","pages":[{"id":"e66f409e-0c0a-4a03-b9cd-bf93c44cdc12","name":"[PROGRAD] 29 Reabrir portal do professor","version":"1.0","author":"ariel","image":"files\\diagrams\\PROGRAD]_29_Reabrir_portal_do_professor.png","isSubprocessPage":false,"elements":[{"id":"dec35fe0-c21f-4109-8bae-0355f41b6c94","name":"[PROGRAD] 29 Reabrir portal do professor","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1067.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"32ce6a28-d8ac-41cc-bcf9-cb6413ba65bf","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":155.0,"y":126.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e08b0683-6689-4bff-b104-07e17334345a","name":"Abrir processo de reabertura do Portal do Professor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":251.5,"y":107.5}],"radius":0.0,"height":69.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2927c94e-05cf-434d-ae42-509a8db00c9f","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":256.0,"y":228.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3b78d233-d9af-4d3a-8617-9cf9d4530691","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":248.0,"y":428.0}],"radius":0.0,"height":74.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d25a4b32-c198-4b3e-9477-2ea3f569e302","name":"Solicitação deferida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":450.0,"y":445.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"adf608c8-7645-4a8b-944e-147fb1cb28cd","name":"Agendar horário para realizar a reabertura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":421.0,"y":630.0}],"radius":0.0,"height":70.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"984beb4f-3d63-47d7-99eb-6b848bc79cda","name":"Colocar aviso no Portal do Professor da indisponibilidade do sistema no horário agendado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":408.5,"y":753.0}],"radius":0.0,"height":94.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f5529f93-c8d8-4931-9101-2cb53c91e59a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":749.5,"y":766.5}],"radius":0.0,"height":67.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d09d68a8-ca3f-4208-858f-3d282d6e6ae2","name":"Realizar a abertura do Portal do Professor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":750.0,"y":654.5}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7fd36acf-ca5c-471e-b78c-91fc41b1b650","name":"Realizar alterações no portal","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":909.0,"y":233.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ad39de3f-6361-42ee-b9ec-546b6b9da318","name":"Fechar o Portal do Professor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":991.0,"y":657.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bc8330f4-0b47-4523-a896-02adb66896f0","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.0,"y":435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e82980af-5ca1-413d-8be4-d1e45c93a4db","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.0,"y":928.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec435576-351e-4ca8-b471-d1a095247a0a","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":605.0,"y":1023.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"a356f880-7f76-450a-80f7-5a03738332dd","name":"Docente resposável pela disciplina","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a254de5b-8c9e-496b-8d4c-4cc70d006d55","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":370.0}],"radius":0.0,"height":222.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ed8027e1-b14d-4930-8eb5-c2447f044067","name":"DERCA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":592.0}],"radius":0.0,"height":295.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bcd7214c-7eea-48ec-8781-94bdf6bc3ecd","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":887.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"e66f409e-0c0a-4a03-b9cd-bf93c44cdc12","containerName":"[PROGRAD] 29 Reabrir portal do professor","isSubprocess":false,"elements":[{"id":"dec35fe0-c21f-4109-8bae-0355f41b6c94","value":"[PROGRAD] 29 Reabrir portal do professor"},{"id":"a356f880-7f76-450a-80f7-5a03738332dd","value":"Docente resposável pela disciplina"},{"id":"a254de5b-8c9e-496b-8d4c-4cc70d006d55","value":"PROGRAD"},{"id":"ed8027e1-b14d-4930-8eb5-c2447f044067","value":"DERCA"},{"id":"bcd7214c-7eea-48ec-8781-94bdf6bc3ecd","value":"DIARQ"},{"id":"32ce6a28-d8ac-41cc-bcf9-cb6413ba65bf","value":""},{"id":"e08b0683-6689-4bff-b104-07e17334345a","value":"Abrir processo de reabertura do Portal do Professor"},{"id":"2927c94e-05cf-434d-ae42-509a8db00c9f","value":"Incluir documento 011 - Ofício"},{"id":"3b78d233-d9af-4d3a-8617-9cf9d4530691","value":"Incluir documento 872 - Despacho simples"},{"id":"d25a4b32-c198-4b3e-9477-2ea3f569e302","value":"Solicitação deferida?"},{"id":"bc8330f4-0b47-4523-a896-02adb66896f0","value":"Comunicar interessado"},{"id":"adf608c8-7645-4a8b-944e-147fb1cb28cd","value":"Agendar horário para realizar a reabertura"},{"id":"d09d68a8-ca3f-4208-858f-3d282d6e6ae2","value":"Realizar a abertura do Portal do Professor"},{"id":"e82980af-5ca1-413d-8be4-d1e45c93a4db","value":"Realizar tratamento arquivístico"},{"id":"ec435576-351e-4ca8-b471-d1a095247a0a","value":""},{"id":"984beb4f-3d63-47d7-99eb-6b848bc79cda","value":"Colocar aviso no Portal do Professor da indisponibilidade do sistema no horário agendado"},{"id":"7fd36acf-ca5c-471e-b78c-91fc41b1b650","value":"Realizar alterações no portal"},{"id":"f5529f93-c8d8-4931-9101-2cb53c91e59a","value":"Incluir documento 872 - Despacho simples"},{"id":"ad39de3f-6361-42ee-b9ec-546b6b9da318","value":"Fechar o Portal do Professor"},{"id":"36550e8a-46cd-4a5a-9af7-6dc7daefa12d"},{"id":"f317a771-c466-4931-8285-e4c6e90d594e"},{"id":"0dfec5e3-cf4d-46c3-8469-129721a32687"},{"id":"7e998f75-0d22-4c75-9aa9-d987b316b289"},{"id":"ddffc5b1-8efb-469b-9d5b-99629636708f"},{"id":"0f29e13d-bb78-445f-8e06-8225453c8e97"},{"id":"db79c11c-df54-4c8c-87c1-a3f2a4f73061"},{"id":"d3a8869b-3b25-4d1c-abe5-29cdd3854cbc"},{"id":"236f4fcf-c961-4253-8fa9-a39028b28795"},{"id":"3143e6b3-ab4a-4bc0-bfee-16e65188055d"},{"id":"da483372-8514-4779-8ecc-58df3cb47f5b"},{"id":"d7685b65-4364-402a-9df3-5f4203510e89"},{"id":"540e2b70-deb1-4f0f-969d-2cb2b06aa86a"},{"id":"bf02dd48-3d52-4df6-a564-aa48e816fdf5"}]}]}