Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 07 Solicitar incentivo à qualificação","publishDate":"29/11/2020 11:46:34","pages":[{"id":"7a7c798a-3b1f-4220-aa05-8ba850729b56","name":"[DAP] 07 Solicitar incentivo à qualificação","version":"1.0","author":"winter","image":"files\\diagrams\\DAP]_07_Solicitar_incentivo_a_qualificacao.png","isSubprocessPage":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","name":"[DAP] 07 Solicitar incentivo à qualificação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1230.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","name":"Obter incentivo à qualificação","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Diploma, Certificado de conclus&atilde;o de ensino.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":129.0,"y":116.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"11707a9f-7bbb-44d8-a6cc-a485e1fa3a2f","name":"Abrir processo de incentivo à qualificação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":101.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d69417c-c72f-4e38-af5a-8e550f04d2d7","name":"Incluir documento 856 - Formulário de incentivo à qualificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":358.0,"y":97.0}],"radius":0.0,"height":68.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"622e70ad-c324-4f3c-adb5-13a1b4a3d66b","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":359.0,"y":254.0}],"radius":0.0,"height":64.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","name":"Incluir documento  \t872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":360.0,"y":410.0}],"radius":0.0,"height":67.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5671bd9e-3c43-4748-b01d-e327ed996929","name":"Atende legislação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":393.0,"y":557.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"043583a2-441b-48ef-8870-cebab8aa92dd","name":"É possível o ajuste ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":193.0,"y":557.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"adc9fad5-3a82-4a0f-80fa-cfbc5af11c87","name":"Fazer as correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":168.0,"y":284.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5adbdae8-94c3-4378-a439-d9664ad4614c","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":168.0,"y":793.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"efca7052-94e0-41cc-b37b-37c2d22f6c30","name":"Incluir documento 852 - Portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":358.0,"y":654.0}],"radius":0.0,"height":62.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ea70bc8-11bc-46e6-bc23-f1bde335f303","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":398.0,"y":1004.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","name":" Registar no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":887.0}],"radius":0.0,"height":51.0,"width":80.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"acc00c8b-e91a-4272-8dab-28d68898b474","name":"Publicar no Boletim de Serviços","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":550.0,"y":795.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8fc06e93-32ee-42f5-bdf8-6d9a13e7489c","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":550.0,"y":691.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DAP/%5bDAP%5d%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"3a7a62b9-fe29-4776-8906-7b7fdbe9ff39","name":"Interessado incluiu certificado ou diploma?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":730.0,"y":701.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"83058075-d84a-427c-932e-3b529f88b993","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":698.0,"y":568.0}],"radius":0.0,"height":64.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d6e76dd4-3daf-4361-b3d0-96c1b3590ce0","name":"Enviar processo ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":705.0,"y":433.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7e4fa9f-4fb6-4a49-a403-4de8b7944098","name":"Incluir em PDF diploma ou certificado de conclusão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":705.0,"y":194.0}],"radius":0.0,"height":72.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0cebbdae-4edd-4100-8777-b2b6c0100f87","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":899.0,"y":550.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5dbbc957-d625-41cb-9899-153cd6e880bb","name":"Realizar o tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":899.0,"y":1146.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","name":"Incentivo concedido ou não.","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1056.0,"y":1161.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"0524a017-6fc4-45f7-8914-4e3308a30bfa","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":349.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":369.0}],"radius":0.0,"height":599.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":968.0}],"radius":0.0,"height":128.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e6aca20b-e7ac-4314-b47b-2172fb65b51c","name":"Divisão de Arquivo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1096.0}],"radius":0.0,"height":154.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7a7c798a-3b1f-4220-aa05-8ba850729b56","containerName":"[DAP] 07 Solicitar incentivo à qualificação","isSubprocess":false,"elements":[{"id":"b4c86f66-a144-4dde-9404-6915567837ad","value":"[DAP] 07 Solicitar incentivo à qualificação"},{"id":"0524a017-6fc4-45f7-8914-4e3308a30bfa","value":"Interessado"},{"id":"6f82ba93-3d98-4fed-8ea7-24ab08d90be2","value":"DAP"},{"id":"6b439cb9-66da-4fce-b9f8-6b5e0e09af9d","value":"Reitoria"},{"id":"e6aca20b-e7ac-4314-b47b-2172fb65b51c","value":"Divisão de Arquivo"},{"id":"350b8019-4248-4d3d-b432-3dc89461e9f6","value":"Obter incentivo à qualificação"},{"id":"50292c7e-bb31-4438-b666-b154e81cb93a","value":"Incluir documento  \t872 - Despacho simples"},{"id":"6140bd7d-f3c4-4f41-b11e-adbf479d57dc","value":" Registar no SIAPE"},{"id":"11707a9f-7bbb-44d8-a6cc-a485e1fa3a2f","value":"Abrir processo de incentivo à qualificação "},{"id":"622e70ad-c324-4f3c-adb5-13a1b4a3d66b","value":"Incluir em PDF documentos comprobatórios"},{"id":"efca7052-94e0-41cc-b37b-37c2d22f6c30","value":"Incluir documento 852 - Portaria"},{"id":"5dbbc957-d625-41cb-9899-153cd6e880bb","value":"Realizar o tratamento arquivístico"},{"id":"5671bd9e-3c43-4748-b01d-e327ed996929","value":"Atende legislação?"},{"id":"3d42cc23-462c-4e8b-9b6a-b7366f084bc4","value":"Incentivo concedido ou não."},{"id":"8d69417c-c72f-4e38-af5a-8e550f04d2d7","value":"Incluir documento 856 - Formulário de incentivo à qualificação"},{"id":"5ea70bc8-11bc-46e6-bc23-f1bde335f303","value":"Assinar documento em bloco"},{"id":"acc00c8b-e91a-4272-8dab-28d68898b474","value":"Publicar no Boletim de Serviços"},{"id":"043583a2-441b-48ef-8870-cebab8aa92dd","value":"É possível o ajuste ?"},{"id":"adc9fad5-3a82-4a0f-80fa-cfbc5af11c87","value":"Fazer as correções necessárias"},{"id":"5adbdae8-94c3-4378-a439-d9664ad4614c","value":"Comunicar interessado"},{"id":"3a7a62b9-fe29-4776-8906-7b7fdbe9ff39","value":"Interessado incluiu certificado ou diploma?"},{"id":"83058075-d84a-427c-932e-3b529f88b993","value":"Incluir documento 872 - Despacho simples"},{"id":"d6e76dd4-3daf-4361-b3d0-96c1b3590ce0","value":"Enviar processo ao interessado"},{"id":"c7e4fa9f-4fb6-4a49-a403-4de8b7944098","value":"Incluir em PDF diploma ou certificado de conclusão"},{"id":"0cebbdae-4edd-4100-8777-b2b6c0100f87","value":"Dar ciência no processo"},{"id":"8fc06e93-32ee-42f5-bdf8-6d9a13e7489c","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"3b0084a0-4931-4d4c-9beb-9e01e418919b"},{"id":"0745e6be-41df-4342-b317-ba8e397ba725"},{"id":"a02e3faa-c230-4619-965c-0272044a1fb9"},{"id":"78c0e4cd-6c44-4bc0-b378-ba30fb0cde0b"},{"id":"d6f7e5e6-a477-446e-a5dd-810534ff559b"},{"id":"137fc13f-819d-4dd9-9578-b77f18a867f4"},{"id":"1395bb91-dbae-439c-bd54-bfe980134d05"},{"id":"735a96ad-e345-4a3a-8027-0aa37ef380dc"},{"id":"9a7b26a2-0f85-4ec2-90db-12ba44918e13"},{"id":"5764ba23-d1fe-4bd2-a7fb-ea38b3c83f5a"},{"id":"751911fd-560f-49ea-8cf4-71c44cb9591c"},{"id":"6e709226-492d-4677-b449-18069a5a4d0b"},{"id":"1c1f9f0a-b8b6-4c9b-a43a-7b9e4e51e84e"},{"id":"5045f9df-64e7-4975-ada4-ff808a8857a2"},{"id":"3dc27939-e9d3-4aed-aa79-9fbf5cefe432"},{"id":"18c84584-b7d2-4324-9e81-fd72d0f05304"},{"id":"35ae5065-e839-4a06-8c5e-cbb2c0a2cff8"}]}]}