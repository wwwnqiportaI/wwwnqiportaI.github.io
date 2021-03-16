Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[GERLAB] 02 Ajustar reserva de laboratório","publishDate":"16/03/2021 15:30:07","pages":[{"id":"fd1b0d2f-b6b0-4e23-97a7-a240ea26cb42","name":"[GERLAB] 02 Ajustar reserva de laboratório","version":"1.0","author":"vanessaks","image":"files\\diagrams\\GERLAB]_02_Ajustar_reserva_de_laboratorio.png","isSubprocessPage":false,"elements":[{"id":"b91c1481-60c0-496e-aee3-7418a2c63d3c","name":"[GERLAB] 02 Ajustar reserva de laboratório","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":863.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"be1bb60c-33a2-474c-b54a-b0a4f557118d","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":140.0,"y":146.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3b2a6b65-700d-4bae-996d-6acb8a856ac0","name":"Enviar e-mail à GERLAB","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":228.0,"y":131.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce4429ec-a411-49b4-8374-7134fb278ba0","name":"Tipo de solicitação","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":253.0,"y":506.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Cancelamento de reserva","elementType":"SequenceFlow","properties":[]},{"name":"Alteração ou Inclusão de reserva","elementType":"SequenceFlow","properties":[]}]},{"id":"c0125fbe-ccff-48ce-8940-c88261bed220","name":"Verificar disponibilidade de laboratório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":506.0,"y":496.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"08297f75-1c70-44b4-90f2-4cad2bb9bc7c","name":"Laboratório disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":675.0,"y":506.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"fcfb5987-c545-47fc-bb43-256650af6712","name":"Contatar solicitante, sugerindo outra data ou laboratório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":890.5,"y":419.0}],"radius":0.0,"height":67.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dbacb52e-1fa1-49de-ae1d-5ef5ea609d1b","name":"Outra data ou outro laboratório atende essa necessidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":926.0,"y":154.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a936a496-9a50-4fe3-9eeb-7d0e33823218","name":"Informar impossibilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":676.0,"y":145.0}],"radius":0.0,"height":58.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15967138-e6e3-4a09-9d81-281019f5e5a0","name":"Verificar outra possibilidade de data ou laboratório?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":531.0,"y":154.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b64240ea-cc81-4832-be2c-b03217a80aa1","name":"Informar outra data ou laboratório viável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":499.0,"y":268.0}],"radius":0.0,"height":64.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"781e6d13-ebdd-4fba-a1f2-4570586375f9","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":536.0,"y":41.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e2019969-0f6d-4a12-8b60-bfb2b02fedfc","name":"Solicitação dentro do prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":801.0,"y":586.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6ad1d19f-a3d1-409e-b9a5-9ba02dd55d0a","name":"Consultar se é possível atender a demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1060.0,"y":641.0}],"radius":0.0,"height":53.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c4f2314-0d2a-4e3f-a40d-dfeb25e80986","name":"É possível aceitar a demanda?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1090.0,"y":798.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"3d27d3f5-41e2-435d-a017-9036f151626b","name":"Cadastrar reserva no sistema","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1066.0,"y":521.0}],"radius":0.0,"height":50.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"816478b4-65d4-4d07-b8ee-6979c1461444","name":"Confirmar reserva ao solicitante e à equipe do laboratório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1335.0,"y":502.0}],"radius":0.0,"height":69.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5afa7403-bf80-47f1-8ee5-9c161d9ff591","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1517.0,"y":521.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6c0e887c-b366-41ac-9f8e-c48ccc391205","name":"Liberar o horário no sistema","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":221.0,"y":701.0}],"radius":0.0,"height":47.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2e79f85a-0690-46b8-bd23-c246699bba98","name":"Confirmar a liberação ao solicitante e aos técnicos do laboratório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":384.0,"y":690.0}],"radius":0.0,"height":68.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bef55fb9-0f23-4c03-b70f-3062c1ba66e6","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":564.0,"y":709.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"f83389e1-017e-4311-af8e-baeb7c4a34b4","name":"Solicitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":358.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"846192b6-8f3b-4753-9c62-a7ec11ba1dcc","name":"GERLAB","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":378.0}],"radius":0.0,"height":505.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"fd1b0d2f-b6b0-4e23-97a7-a240ea26cb42","containerName":"[GERLAB] 02 Ajustar reserva de laboratório","isSubprocess":false,"elements":[{"id":"b91c1481-60c0-496e-aee3-7418a2c63d3c","value":"[GERLAB] 02 Ajustar reserva de laboratório"},{"id":"f83389e1-017e-4311-af8e-baeb7c4a34b4","value":"Solicitante"},{"id":"846192b6-8f3b-4753-9c62-a7ec11ba1dcc","value":"GERLAB"},{"id":"be1bb60c-33a2-474c-b54a-b0a4f557118d","value":""},{"id":"ce4429ec-a411-49b4-8374-7134fb278ba0","value":"Tipo de solicitação"},{"id":"6c0e887c-b366-41ac-9f8e-c48ccc391205","value":"Liberar o horário no sistema"},{"id":"08297f75-1c70-44b4-90f2-4cad2bb9bc7c","value":"Laboratório disponível?"},{"id":"c0125fbe-ccff-48ce-8940-c88261bed220","value":"Verificar disponibilidade de laboratório"},{"id":"fcfb5987-c545-47fc-bb43-256650af6712","value":"Contatar solicitante, sugerindo outra data ou laboratório"},{"id":"e2019969-0f6d-4a12-8b60-bfb2b02fedfc","value":"Solicitação dentro do prazo?"},{"id":"3d27d3f5-41e2-435d-a017-9036f151626b","value":"Cadastrar reserva no sistema"},{"id":"dbacb52e-1fa1-49de-ae1d-5ef5ea609d1b","value":"Outra data ou outro laboratório atende essa necessidade?"},{"id":"3b2a6b65-700d-4bae-996d-6acb8a856ac0","value":"Enviar e-mail à GERLAB"},{"id":"6ad1d19f-a3d1-409e-b9a5-9ba02dd55d0a","value":"Consultar se é possível atender a demanda"},{"id":"bef55fb9-0f23-4c03-b70f-3062c1ba66e6","value":""},{"id":"2c4f2314-0d2a-4e3f-a40d-dfeb25e80986","value":"É possível aceitar a demanda?"},{"id":"a936a496-9a50-4fe3-9eeb-7d0e33823218","value":"Informar impossibilidade"},{"id":"781e6d13-ebdd-4fba-a1f2-4570586375f9","value":""},{"id":"816478b4-65d4-4d07-b8ee-6979c1461444","value":"Confirmar reserva ao solicitante e à equipe do laboratório"},{"id":"5afa7403-bf80-47f1-8ee5-9c161d9ff591","value":""},{"id":"15967138-e6e3-4a09-9d81-281019f5e5a0","value":"Verificar outra possibilidade de data ou laboratório?"},{"id":"2e79f85a-0690-46b8-bd23-c246699bba98","value":"Confirmar a liberação ao solicitante e aos técnicos do laboratório"},{"id":"b64240ea-cc81-4832-be2c-b03217a80aa1","value":"Informar outra data ou laboratório viável"},{"id":"ee3be03f-ad61-4b42-b5ae-9fd7883ad7d9"},{"id":"66076232-6578-4837-ab68-49615ba922a4"},{"id":"5135fae1-2211-4965-94aa-0fa4642feb16"},{"id":"35e23eeb-2cdf-4cdc-8d23-edac59260114"},{"id":"1d491dd4-c257-41f2-9b48-b4e510cd780e"},{"id":"7615e226-6f48-4627-9798-615ef3cd2cbb"},{"id":"92f059a0-fe65-45be-84f5-a4ac908bc925"},{"id":"b29eda6c-37c8-4b87-a3f1-e0344ddc0d1e"},{"id":"d72e8c98-62c4-425b-b393-b72b8f040be4"},{"id":"83083185-e94c-4e6f-9356-71f81bac15fe"},{"id":"707efbd2-281e-4e5a-bf13-ca899978d886"},{"id":"d5f2f341-f3bb-4599-b3c8-558c62cda083"}]}]}