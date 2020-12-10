Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PREF] 05 Solicitar reserva eventual no estacionamento","publishDate":"02/12/2020 14:24:17","pages":[{"id":"0dd3676a-5d52-4e05-b282-cea799d274f2","name":"[PREF] 05 Solicitar reserva eventual no estacionamento","version":"1.0","author":"camilabittencourt","image":"files\\diagrams\\PREF]_05_Solicitar_reserva_eventual_no_estacionamento.png","isSubprocessPage":false,"elements":[{"id":"8e2039b5-05e7-4a74-967a-308fdd41b070","name":"[PREF] 05 Solicitar reserva eventual no estacionamento","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":615.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b2b9d0d3-ab93-418f-8a78-ee27b9a8e4e4","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Sistema de Pedidos Internos (PI), sistema de reservas de estacionamento.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":140.0,"y":186.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"faf5dcee-349b-48c9-8c96-60569ac33196","name":"Preencher formulário de \"Solicitação de reserva no estacionamento\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":225.0,"y":161.5}],"radius":0.0,"height":79.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3e37a4e9-a20f-4fc5-aa06-cf12d0b86983","name":"Analisar dados do chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":157.0,"y":299.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"18f8b20e-9e60-46a1-b758-e5bb0f483208","name":"Os dados  estão completos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":182.0,"y":408.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"be6b310c-7bbc-44bc-aafb-80bb9e2c2665","name":"Solicitar maiores informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":347.0,"y":398.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a98c39a4-1a79-4e34-810a-d8554fe6f738","name":"Completar informações e/ou esclarecer dúvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":475.0,"y":176.0}],"radius":0.0,"height":71.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b134b358-63e0-49db-9a6b-5b9b88fe40a2","name":"Verificar a disponibilidade de vagas no sistema de reservas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":546.0,"y":385.0}],"radius":0.0,"height":86.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"790aa4fe-1f80-4dce-9999-bc40e9f39fbf","name":"Há disponibilidade de vagas no sistema de reservas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":801.0,"y":408.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"cc8a34ef-83ed-4aa4-9a61-916b7c90c66e","name":"Incluir a reserva solicitada no sistema","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":953.0,"y":452.5}],"radius":0.0,"height":73.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d28fde05-3b4e-4bf7-b9ab-8d357d33093f","name":"Confirmar a reserva ao requerente,informando a guarita de acesso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1114.0,"y":440.5}],"radius":0.0,"height":97.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"59af1068-f904-4bb0-8674-df7d4840b036","name":"Informar ao solicitante que não será possível atender à solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":950.0,"y":334.0}],"radius":0.0,"height":79.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6312a3b4-9503-45df-8c56-8c8cf2fc4e5d","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: Reserva de vaga no estacionamento.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1234.0,"y":358.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"45af256b-12b3-4595-9d31-fd5bc9a9ccd0","name":"Docente ou Técnico-administrativo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":262.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5f1bbea0-2f14-4b69-bfa7-fb74bfba5bde","name":"Técnico do grupo de trabalho \"Prefeitura - Estacionamento\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":282.0}],"radius":0.0,"height":353.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0dd3676a-5d52-4e05-b282-cea799d274f2","containerName":"[PREF] 05 Solicitar reserva eventual no estacionamento","isSubprocess":false,"elements":[{"id":"8e2039b5-05e7-4a74-967a-308fdd41b070","value":"[PREF] 05 Solicitar reserva eventual no estacionamento"},{"id":"45af256b-12b3-4595-9d31-fd5bc9a9ccd0","value":"Docente ou Técnico-administrativo"},{"id":"5f1bbea0-2f14-4b69-bfa7-fb74bfba5bde","value":"Técnico do grupo de trabalho \"Prefeitura - Estacionamento\""},{"id":"b2b9d0d3-ab93-418f-8a78-ee27b9a8e4e4","value":""},{"id":"faf5dcee-349b-48c9-8c96-60569ac33196","value":"Preencher formulário de \"Solicitação de reserva no estacionamento\""},{"id":"b134b358-63e0-49db-9a6b-5b9b88fe40a2","value":"Verificar a disponibilidade de vagas no sistema de reservas"},{"id":"790aa4fe-1f80-4dce-9999-bc40e9f39fbf","value":"Há disponibilidade de vagas no sistema de reservas?"},{"id":"59af1068-f904-4bb0-8674-df7d4840b036","value":"Informar ao solicitante que não será possível atender à solicitação"},{"id":"cc8a34ef-83ed-4aa4-9a61-916b7c90c66e","value":"Incluir a reserva solicitada no sistema"},{"id":"18f8b20e-9e60-46a1-b758-e5bb0f483208","value":"Os dados  estão completos?"},{"id":"be6b310c-7bbc-44bc-aafb-80bb9e2c2665","value":"Solicitar maiores informações"},{"id":"6312a3b4-9503-45df-8c56-8c8cf2fc4e5d","value":""},{"id":"d28fde05-3b4e-4bf7-b9ab-8d357d33093f","value":"Confirmar a reserva ao requerente,informando a guarita de acesso"},{"id":"a98c39a4-1a79-4e34-810a-d8554fe6f738","value":"Completar informações e/ou esclarecer dúvidas"},{"id":"3e37a4e9-a20f-4fc5-aa06-cf12d0b86983","value":"Analisar dados do chamado"},{"id":"3f4f56e2-1b8e-4feb-8a76-e3a25bb8cc17"},{"id":"09a2441a-bd89-449d-85f6-0b75a5b5a97a"},{"id":"aafcedf7-a0a5-4f8b-a546-c5e3047a8203"},{"id":"76ccb0cb-185b-4ede-bfd0-52d958f4aa64"},{"id":"a3e2facf-d197-4396-8181-533ce7c94501"},{"id":"71b6797b-f729-46a9-81f4-8159f4ad53ec"},{"id":"9b99301f-be57-4b3d-a014-80a4ee79248e"},{"id":"9db08bc4-cb60-455c-b07a-6e51359fbad5"},{"id":"d1050867-5e81-4198-b6d2-db887b0b999c"},{"id":"acd0ef14-bf10-4417-96d7-fbfbe1ae0a62"},{"id":"1623dc78-8e60-4fbf-961c-73fdbb0f07a4"},{"id":"1344f9d7-156d-4087-9e1f-c02ca418179c"},{"id":"8989c05c-7430-4cca-bf30-fcf69b65117e"},{"id":"636a865f-698b-49d2-b4b6-1f0b7ea887a4"},{"id":"30e45927-7da6-43bd-b415-aa428431093a"},{"id":"705f65ea-5006-4933-9013-21edbd2fa8d0"},{"id":"7a952cb5-c75c-41a5-a99d-d54d277e750f"},{"id":"21e89b1c-76a9-40c8-8343-6cd8e59ee788"}]}]}