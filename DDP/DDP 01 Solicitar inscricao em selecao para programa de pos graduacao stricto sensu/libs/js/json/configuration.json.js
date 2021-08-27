Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DDP] 01 Solicitar inscrição em seleção para programa de pós-graduação stricto sensu","publishDate":"27/08/2021 11:04:33","pages":[{"id":"eee3c5d5-d9cf-4e91-84e2-dfb409e997c1","name":"[DDP] 01 Solicitar inscrição em seleção para programa pós-graduação stricto sensu","version":"1.0","author":"alinebrancher","image":"files\\diagrams\\DDP]_01_Solicitar_inscricao_em_selecao_para_programa_pos_graduacao_stricto_sensu.png","isSubprocessPage":false,"elements":[{"id":"bac5ab99-f1f2-4249-803c-26dbcee7cb64","name":"[DDP] 01 Solicitar inscrição em seleção para programa pós-graduação stricto sensu\r\n","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1259.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"2b7693db-ca78-45dd-bfc4-2a79bf56d00f","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: trâmites de ingresso com a universidade em que será realizado o programa de  pós-graduação stricto sensu</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":132.0,"y":85.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"8377a2ba-0d6a-471b-89d8-3d2a6da0f004","name":"Abrir processo de inscrição para afastamento para programa de Pós-Graduação Stricto Sensu","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":208.0,"y":63.0}],"radius":0.0,"height":74.0,"width":145.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"275c6b87-88db-4bae-9fc3-5ec82af25648","name":"Incluir documento 095 - Inscrição programa pós-graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":430.0,"y":59.0}],"radius":0.0,"height":83.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eced24af-06e8-454b-a6d6-dc0a439bd95e","name":"\tIncluir documento 096 - Plano de trabalho programa de pós-graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":426.0,"y":173.0}],"radius":0.0,"height":65.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0dd2fa81-1199-4f08-814c-a085da272aa0","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":174.0}],"radius":0.0,"height":62.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6334827c-8581-470e-9f0d-6d6b91e19fb0","name":"Chefia imediata é Pró-Reitoria?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":768.0,"y":185.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"6b3d1266-7ce6-499c-afce-8c0ba5177f38","name":"Incluir documento 864 - Parecer da chefia imediata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":734.0,"y":300.0}],"radius":0.0,"height":69.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e6c74d13-5710-4619-ac44-452e84abed30","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":736.0,"y":433.0}],"radius":0.0,"height":65.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9738342-1b96-4e70-9bc7-bbad72637306","name":"Analisar o processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":599.0,"y":590.0}],"radius":0.0,"height":56.0,"width":83.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b01cb8cf-e1a7-47fc-a797-d3467d3dcfc7","name":"Incluir documento  852 - Portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":589.0,"y":703.0}],"radius":0.0,"height":63.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"adc6f99e-0596-4071-a1be-b8241a246bc4","name":"Publicar portaria  no boletim de serviços eletrônico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":592.0,"y":812.0}],"radius":0.0,"height":76.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdd5a0ff-18b5-46a9-8e73-79bbab0edbe5","name":"Publicar resultado no site institucional","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":739.0,"y":820.0}],"radius":0.0,"height":60.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4121794d-03c8-4315-801c-f6255a49aec7","name":"Interessado foi selecionado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":898.0,"y":830.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"faaacfe0-4d23-4a8f-a856-302f3ba91a37","name":"Tem interesse em interpor recurso?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1087.0,"y":64.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"a3b68ac1-4f15-463b-b41b-e388dbabe829","name":"Incluir documento 872- Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1056.0,"y":166.0}],"radius":0.0,"height":63.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4956b68-35d1-4e09-b859-659c866d3f2e","name":"Analisar e deliberar o recurso proposto pelo interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1058.0,"y":633.0}],"radius":0.0,"height":69.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"311e307b-1c9a-4d39-a2c1-589acaa40f37","name":"Incluir documento 852 - Portaria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1056.0,"y":747.0}],"radius":0.0,"height":63.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"752c4e17-4e04-4411-a798-0d164b34ee00","name":"Recurso aceito?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1087.0,"y":849.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9af09533-d156-4957-8561-e0e1b552f685","name":"Publicar portaria no boletim de serviços eletrônico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1165.0,"y":829.0}],"radius":0.0,"height":81.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7836b59a-37c0-484e-a860-d4f5f3caebe7","name":"Publicar resultado no site institucional","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1162.0,"y":958.0}],"radius":0.0,"height":59.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff5ec692-8c05-4ba4-a4fa-880fa22e524e","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1062.0,"y":1010.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"db51244b-f56d-4756-af7b-f9ae1217da69","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1312.0,"y":54.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aebd2c52-c2a5-465b-9baf-3b3893a10355","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1312.0,"y":1172.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"acc86c00-c1c6-40dc-b30c-4ae61db5c33f","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Saída: Inscrição na seleção para habilitação em programa de pós-graduação stricto sensu aprovada ou não</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1431.0,"y":1187.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"383b1a39-646d-4af2-9316-0426e512c925","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":248.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"50d7b3dd-72a6-4773-9d10-62d63ea95e28","name":"Chefia imediata","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":268.0}],"radius":0.0,"height":138.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6e46fd6d-0715-4b71-8231-d40e3fd707be","name":"Pró-Reitoria Vinculada","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":406.0}],"radius":0.0,"height":142.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4c002b4f-1eb2-4aa3-bed3-d5481aabc522","name":"DDP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":548.0}],"radius":0.0,"height":592.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7354f826-fbbc-45b9-b393-e587143c7d17","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1140.0}],"radius":0.0,"height":139.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"eee3c5d5-d9cf-4e91-84e2-dfb409e997c1","containerName":"[DDP] 01 Solicitar inscrição em seleção para programa pós-graduação stricto sensu","isSubprocess":false,"elements":[{"id":"bac5ab99-f1f2-4249-803c-26dbcee7cb64","value":"[DDP] 01 Solicitar inscrição em seleção para programa pós-graduação stricto sensu\r\n"},{"id":"383b1a39-646d-4af2-9316-0426e512c925","value":"Interessado"},{"id":"50d7b3dd-72a6-4773-9d10-62d63ea95e28","value":"Chefia imediata"},{"id":"6e46fd6d-0715-4b71-8231-d40e3fd707be","value":"Pró-Reitoria Vinculada"},{"id":"4c002b4f-1eb2-4aa3-bed3-d5481aabc522","value":"DDP"},{"id":"7354f826-fbbc-45b9-b393-e587143c7d17","value":"DIARQ"},{"id":"8377a2ba-0d6a-471b-89d8-3d2a6da0f004","value":"Abrir processo de inscrição para afastamento para programa de Pós-Graduação Stricto Sensu"},{"id":"275c6b87-88db-4bae-9fc3-5ec82af25648","value":"Incluir documento 095 - Inscrição programa pós-graduação"},{"id":"eced24af-06e8-454b-a6d6-dc0a439bd95e","value":"\tIncluir documento 096 - Plano de trabalho programa de pós-graduação"},{"id":"0dd2fa81-1199-4f08-814c-a085da272aa0","value":"Incluir em PDF documentos comprobatórios"},{"id":"6b3d1266-7ce6-499c-afce-8c0ba5177f38","value":"Incluir documento 864 - Parecer da chefia imediata"},{"id":"e6c74d13-5710-4619-ac44-452e84abed30","value":"Incluir documento 872 - Despacho simples"},{"id":"6334827c-8581-470e-9f0d-6d6b91e19fb0","value":"Chefia imediata é Pró-Reitoria?"},{"id":"b01cb8cf-e1a7-47fc-a797-d3467d3dcfc7","value":"Incluir documento  852 - Portaria"},{"id":"d9738342-1b96-4e70-9bc7-bbad72637306","value":"Analisar o processo"},{"id":"adc6f99e-0596-4071-a1be-b8241a246bc4","value":"Publicar portaria  no boletim de serviços eletrônico"},{"id":"faaacfe0-4d23-4a8f-a856-302f3ba91a37","value":"Tem interesse em interpor recurso?"},{"id":"db51244b-f56d-4756-af7b-f9ae1217da69","value":"Dar ciência no processo"},{"id":"a3b68ac1-4f15-463b-b41b-e388dbabe829","value":"Incluir documento 872- Despacho simples"},{"id":"c4956b68-35d1-4e09-b859-659c866d3f2e","value":"Analisar e deliberar o recurso proposto pelo interessado"},{"id":"9af09533-d156-4957-8561-e0e1b552f685","value":"Publicar portaria no boletim de serviços eletrônico"},{"id":"acc86c00-c1c6-40dc-b30c-4ae61db5c33f","value":""},{"id":"311e307b-1c9a-4d39-a2c1-589acaa40f37","value":"Incluir documento 852 - Portaria"},{"id":"2b7693db-ca78-45dd-bfc4-2a79bf56d00f","value":""},{"id":"752c4e17-4e04-4411-a798-0d164b34ee00","value":"Recurso aceito?"},{"id":"4121794d-03c8-4315-801c-f6255a49aec7","value":"Interessado foi selecionado?"},{"id":"fdd5a0ff-18b5-46a9-8e73-79bbab0edbe5","value":"Publicar resultado no site institucional"},{"id":"7836b59a-37c0-484e-a860-d4f5f3caebe7","value":"Publicar resultado no site institucional"},{"id":"aebd2c52-c2a5-465b-9baf-3b3893a10355","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"ff5ec692-8c05-4ba4-a4fa-880fa22e524e","value":"Comunicar interessado"},{"id":"19264a61-3e14-4e43-a1e7-4a805f629b5f"},{"id":"39468d68-07e5-4414-9dc4-63183fd905c7"},{"id":"88705384-16fd-4ac2-8c64-e9cf2eb0ef10"},{"id":"22ff2a45-3120-4c00-84ee-7ea7e3158f35"},{"id":"e08e3ba7-18a9-4165-986e-16f91a1165c2"},{"id":"4f35d219-0fcd-4ac8-a4ca-0bf5e492cb3c"},{"id":"fc4d4676-883f-4897-996b-48f62df5a114"},{"id":"115ea0d5-2c3d-43af-be2c-647b24983871"},{"id":"a7ccc706-93f6-4411-acc4-16bf6a40caf7"},{"id":"2ea19d7b-a859-4541-a748-9d119a9d4d1f"},{"id":"d9385f8a-06e2-45d3-8cb1-4fb9296fa9a1"},{"id":"c9394a11-e67d-4662-b5a8-859e84d36677"}]}]}