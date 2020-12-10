Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DEO] 11 Acompanhar execução orçamentária - LOA","publishDate":"10/12/2020 11:48:31","pages":[{"id":"5efe4a39-1a4d-4a4b-8000-2703f4f8518d","name":"[DEO] 11 Acompanhamento da Execução Orçamentária - LOA","version":"1.0","author":"tiagof","image":"files\\diagrams\\DEO]_11_Acompanhamento_da_Execucao_Orcamentaria___LOA.png","isSubprocessPage":false,"elements":[{"id":"abebd5ec-efe3-4e10-bb36-96f89bc59d3e","name":"[DEO] 11 Acompanhamento da Execução Orçamentária - LOA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1551.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f08cefa3-c546-434a-a9d7-5d8438aa3125","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":146.0,"y":91.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3d0ce91a-31ff-44e5-b416-6d94c67ec7c7","name":"Abrir processo de acompanhamento da execução orçamentária - LOA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":260.0,"y":61.0}],"radius":0.0,"height":90.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d52b4082-633e-4946-849c-c9d871ef297c","name":"Incluir em PDF matriz da LOA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":428.0,"y":69.0}],"radius":0.0,"height":74.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8ade8be-373a-4ee1-98b1-df5e06e633c0","name":"Incluir em PDF documento com as etapas de execução/ alteração da LOA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":432.0,"y":179.0}],"radius":0.0,"height":88.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ca4ff85f-ccce-48c0-8528-0b7cf193758f","name":"Incluir em PDF controle de saldos do SIAFI do mês vigente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":281.5,"y":284.0}],"radius":0.0,"height":94.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1855510d-b852-4e4b-b013-81e355dae50c","name":"Incluir documento 174 - Planilha de execução orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":270.0,"y":459.0}],"radius":0.0,"height":74.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4c35b1e7-9809-4662-a071-3ac68f6cab3e","name":"Será necessária alteração orçamentária?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":308.0,"y":620.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3912c893-a17d-478b-926a-ab3553e4e4a7","name":"Incluir documento        877 - Nota técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":281.0,"y":722.0}],"radius":0.0,"height":76.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7629f092-c564-4028-a04f-547106e69ea0","name":"Incluir em PDF demais documentos que embasem a sugestão de alteração","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":272.0,"y":848.0}],"radius":0.0,"height":85.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"714c0c09-2c1a-45b1-8131-0c912e2d62c6","name":"Incluir documento 036- Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":278.0,"y":1235.0}],"radius":0.0,"height":76.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7638f0ac-0802-40d5-90f0-bb823691d69d","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.5,"y":1044.0}],"radius":0.0,"height":66.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c6f0854-22fc-4872-9953-9934088cedcf","name":"Prosseguir com a alteração?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":460.0,"y":881.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c8ccdd8d-5b89-4103-b409-59dd52395831","name":"Incluir em PDF comprovante de solicitação à Subsecretaria de Planejamento e Orçamento (SPO) ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":603.0,"y":748.0}],"radius":0.0,"height":95.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f576f1b2-f54c-407f-aa5c-2cfe412c40c7","name":"Aguardar conclusão da análise ","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":768.0,"y":780.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"199be396-d186-4679-bba7-64291372a424","name":"Incluir em PDF a análise da solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":835.0,"y":756.0}],"radius":0.0,"height":79.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8384dd8a-e4e7-4e5a-8141-9d849bdd5f1c","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":867.0,"y":620.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Etapa de prestação de contas aberta?","elementType":"SequenceFlow","properties":[]}]},{"id":"4ab66f81-4bd9-44c4-8548-da8bf2ee58c6","name":"Etapa de prestação de contas aberta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":867.0,"y":464.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b888fbb6-5bd1-4687-95c1-e79836db9a10","name":"[DEO] 12 Prestar contas de execução orçamentária - LOA","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1001.0,"y":454.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DEO/%5bDEO%5d%2012%20Prestar%20contas%20de%20execu%c3%a7%c3%a3o%20or%c3%a7ament%c3%a1ria%20-%20LOA/#list","type":"url"}},{"id":"d6b6d155-25f9-4a10-bcdf-1243c16eee18","name":"Anexar o processo de prestação de contas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1182.0,"y":452.5}],"radius":0.0,"height":65.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2475dc7c-437d-480b-b2cb-b52bb08c756b","name":"Existe nova etapa de prestação de contas prevista ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1346.0,"y":464.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"69f40052-dae0-4da0-8b3c-ee8949c7d393","name":"Prazo de execução orçamentária encerrado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1346.0,"y":303.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0da90d83-cabb-4717-a043-78c2de74836d","name":"Aguardar etapa de prestação de contas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":872.0,"y":372.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"805046f5-c5ff-4383-9f64-d8dccf8d6f93","name":"Aguardar o envio de saldos do próximo mês","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":665.0,"y":208.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"0b68ccba-aca8-4ab0-817c-57159e70a68f","name":"Incluir Documento 987 - Declaração simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1311.0,"y":601.0}],"radius":0.0,"height":76.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"51d4ed0e-7cd0-4352-b700-322de374c742","name":"Incluir documento        877- Nota técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1317.0,"y":794.0}],"radius":0.0,"height":74.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8daea64e-b666-41f9-a9b0-e176f5356739","name":"Dar ciência nos documentos  877- Nota técnica e 987 - Declaração simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1312.0,"y":1036.0}],"radius":0.0,"height":82.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0aaca92-ccb8-4197-9647-911c00765cde","name":"Dar ciência nos documentos  877- Nota técnica e 987 - Declaração simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1308.5,"y":1219.0}],"radius":0.0,"height":86.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"244d3dc6-4bc5-4431-ae54-28bdd4196ad5","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1321.0,"y":1413.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"40ca09b2-6e8c-416b-97fe-0030bb6c08f7","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1351.0,"y":1510.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"5332fd02-7890-4add-8b11-68bf58e8d2b1","name":"Aguardar nova etapa ou nova fase de solicitação de alteração","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":465.0,"y":625.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"cb566780-96ba-4a01-b494-e5494568fd4a","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":965.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"88b925ed-813b-40f7-92ec-798cbab8e786","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":985.0}],"radius":0.0,"height":186.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0695adc2-41e9-4af5-81bf-cbeda9fd694c","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1171.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9b94ce8a-fdc8-4778-8a51-3f9484b7ad49","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1371.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"5efe4a39-1a4d-4a4b-8000-2703f4f8518d","containerName":"[DEO] 11 Acompanhamento da Execução Orçamentária - LOA","isSubprocess":false,"elements":[{"id":"abebd5ec-efe3-4e10-bb36-96f89bc59d3e","value":"[DEO] 11 Acompanhamento da Execução Orçamentária - LOA"},{"id":"cb566780-96ba-4a01-b494-e5494568fd4a","value":"DEO"},{"id":"88b925ed-813b-40f7-92ec-798cbab8e786","value":"PROAD"},{"id":"0695adc2-41e9-4af5-81bf-cbeda9fd694c","value":"REITORIA"},{"id":"9b94ce8a-fdc8-4778-8a51-3f9484b7ad49","value":"DIARQ"},{"id":"f08cefa3-c546-434a-a9d7-5d8438aa3125","value":""},{"id":"3d0ce91a-31ff-44e5-b416-6d94c67ec7c7","value":"Abrir processo de acompanhamento da execução orçamentária - LOA"},{"id":"244d3dc6-4bc5-4431-ae54-28bdd4196ad5","value":"Realizar tratamento arquivístico"},{"id":"d52b4082-633e-4946-849c-c9d871ef297c","value":"Incluir em PDF matriz da LOA"},{"id":"40ca09b2-6e8c-416b-97fe-0030bb6c08f7","value":""},{"id":"ca4ff85f-ccce-48c0-8528-0b7cf193758f","value":"Incluir em PDF controle de saldos do SIAFI do mês vigente"},{"id":"1855510d-b852-4e4b-b013-81e355dae50c","value":"Incluir documento 174 - Planilha de execução orçamentária"},{"id":"4c35b1e7-9809-4662-a071-3ac68f6cab3e","value":"Será necessária alteração orçamentária?"},{"id":"3912c893-a17d-478b-926a-ab3553e4e4a7","value":"Incluir documento        877 - Nota técnica"},{"id":"c8ccdd8d-5b89-4103-b409-59dd52395831","value":"Incluir em PDF comprovante de solicitação à Subsecretaria de Planejamento e Orçamento (SPO) "},{"id":"5332fd02-7890-4add-8b11-68bf58e8d2b1","value":"Aguardar nova etapa ou nova fase de solicitação de alteração"},{"id":"f8ade8be-373a-4ee1-98b1-df5e06e633c0","value":"Incluir em PDF documento com as etapas de execução/ alteração da LOA"},{"id":"199be396-d186-4679-bba7-64291372a424","value":"Incluir em PDF a análise da solicitação"},{"id":"f576f1b2-f54c-407f-aa5c-2cfe412c40c7","value":"Aguardar conclusão da análise "},{"id":"7638f0ac-0802-40d5-90f0-bb823691d69d","value":"Incluir documento 036 - Análise e deliberação"},{"id":"7629f092-c564-4028-a04f-547106e69ea0","value":"Incluir em PDF demais documentos que embasem a sugestão de alteração"},{"id":"7c6f0854-22fc-4872-9953-9934088cedcf","value":"Prosseguir com a alteração?"},{"id":"4ab66f81-4bd9-44c4-8548-da8bf2ee58c6","value":"Etapa de prestação de contas aberta?"},{"id":"0da90d83-cabb-4717-a043-78c2de74836d","value":"Aguardar etapa de prestação de contas"},{"id":"b888fbb6-5bd1-4687-95c1-e79836db9a10","value":"[DEO] 12 Prestar contas de execução orçamentária - LOA"},{"id":"2475dc7c-437d-480b-b2cb-b52bb08c756b","value":"Existe nova etapa de prestação de contas prevista ?"},{"id":"d6b6d155-25f9-4a10-bcdf-1243c16eee18","value":"Anexar o processo de prestação de contas"},{"id":"714c0c09-2c1a-45b1-8131-0c912e2d62c6","value":"Incluir documento 036- Análise e deliberação"},{"id":"0b68ccba-aca8-4ab0-817c-57159e70a68f","value":"Incluir Documento 987 - Declaração simples"},{"id":"51d4ed0e-7cd0-4352-b700-322de374c742","value":"Incluir documento        877- Nota técnica"},{"id":"8daea64e-b666-41f9-a9b0-e176f5356739","value":"Dar ciência nos documentos  877- Nota técnica e 987 - Declaração simples "},{"id":"b0aaca92-ccb8-4197-9647-911c00765cde","value":"Dar ciência nos documentos  877- Nota técnica e 987 - Declaração simples "},{"id":"69f40052-dae0-4da0-8b3c-ee8949c7d393","value":"Prazo de execução orçamentária encerrado?"},{"id":"8384dd8a-e4e7-4e5a-8141-9d849bdd5f1c","value":""},{"id":"805046f5-c5ff-4383-9f64-d8dccf8d6f93","value":"Aguardar o envio de saldos do próximo mês"},{"id":"75e9ac1a-c708-40c7-89e4-4f259304ea7b"},{"id":"af142f0e-c611-4f1b-8521-8102e5a27eaa"},{"id":"28879876-ea40-4b62-a7da-13067ba60c24"},{"id":"134528b1-6fb8-4b82-9da7-aabbcd9b1c74"},{"id":"04cf3d11-4724-4435-a928-27f730c50190"},{"id":"9aaa9104-114e-4894-b979-bd6c6298aeb3"},{"id":"bd75026e-11c0-4100-992f-14b58bba99cd"},{"id":"fdbe07e2-971e-4350-bf1a-261a5d53a465"},{"id":"9697576f-c9a2-4274-a401-aa6e1af6c58b"},{"id":"fa890a3c-2b26-4ffd-a0dd-6dda2c346807"},{"id":"0697a4a1-8c44-4d04-a2f4-242d396ff42d"},{"id":"1615d5af-e322-4f53-a8fc-917f9094722a"},{"id":"09ec829b-7d53-4176-a431-98d8f0913d7d"},{"id":"923588e6-4007-48fc-ae45-0257f6e7b404"},{"id":"043df662-af95-435b-b3b3-f6e79c37f179"},{"id":"cf4fd452-5636-495c-8e63-45f9fd34623e"},{"id":"2bff9e96-a1b8-4547-bdaf-f80d63effa29"},{"id":"0ed41c20-8d54-4e2b-838d-509a66535127"}]}]}