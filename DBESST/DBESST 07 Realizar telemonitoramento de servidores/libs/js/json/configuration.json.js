Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DBESST] 07 Realizar telemonitoramento de servidores","publishDate":"13/08/2021 11:21:35","pages":[{"id":"ac994f61-eeb9-41ac-800f-368d661ccd85","name":"[DBESST] 07 Realizar telemonitoramento de servidores","version":"1.0","author":"branc","image":"files\\diagrams\\DBESST]_07_Realizar_telemonitoramento_de_servidores.png","isSubprocessPage":false,"elements":[{"id":"d5be0c81-d7ac-40a1-8d3a-e30a9f00b966","name":"[DBESST] 07 Realizar telemonitoramento de servidores","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1378.3,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"57e312fe-6a12-4162-b446-4c2c0a197863","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":137.0,"y":58.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"acf25454-a390-4749-b90a-4665cf1c5d8d","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":336.0,"y":53.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"3d41ca7f-c771-42ea-96fd-24892edec765","name":"Abrir processo de monitoramente referente à COVID-19","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":547.0,"y":37.0}],"radius":0.0,"height":72.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57776e41-6e5b-4472-bd9e-5bc3fd9c4377","name":"Incluir documento 247 - Telemonitoramento COVID-19","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":901.0,"y":39.0}],"radius":0.0,"height":68.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06114f7b-894e-4194-b35b-8856a4ec721d","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":938.0,"y":220.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"3c7a2215-2e68-478d-bc9a-a92b3f37dddd","name":"[COE] 02 Telemonitorar pessoas com sintomas de COVID-19","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":701.0,"y":900.5}],"radius":0.0,"height":61.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"d55334d0-9909-4ab3-b0a0-7dbaa45e8b02","name":"Sem sintomas por 10 dias?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":797.0,"y":1089.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"25842054-5c86-4621-bcfc-dd51bda74359","name":"Sem febre e sem uso de antitérminco por 24h?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":916.0,"y":1089.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"49113fa2-dfd1-4243-9c0f-0e0ebe585a50","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1040.0,"y":1078.5}],"radius":0.0,"height":62.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b232cc7-62d6-44b9-8d39-3edfccd5a82f","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":913.0,"y":370.099976}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"54648965-0a70-4bca-965c-2c711d83a282","name":"Comunicar chefia imediata,  DIBEST e COE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":311.0,"y":165.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"49c06f0f-18eb-4501-8721-7c9d90d25e47","name":"Fazer rastreio inicial dos contactantes na UFCSPA e tempo de isolamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":302.0,"y":345.2}],"radius":0.0,"height":80.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba58dbb1-6abf-480d-8305-22e8825a3981","name":"Comunicar DIBEST","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":311.0,"y":454.099976}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23f67ca3-e440-4274-9a26-c9a9dfbdbdf9","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1197.0,"y":569.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"5b658005-96d6-4efb-b1d8-e7b2f8c199bb","name":"Iniciar Protocolos de acolhimento, atendimento e apoio social","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1153.0,"y":649.500061}],"radius":0.0,"height":63.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"473a369b-6fc7-47a8-8f98-e80e1c163131","name":"Realizar orientações e acompanhamentos dos contactantes na UFCSPA\r","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1158.0,"y":742.099854}],"radius":0.0,"height":72.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"25034bef-3232-4ea6-8565-f8f064c67b19","name":"Orientar sobre abertura de processo de licença saúde","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1322.0,"y":747.2}],"radius":0.0,"height":63.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f182059a-90e2-4925-89fa-346446058fcd","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1480.0,"y":759.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"65b5a51d-4f21-4251-9e24-b47aeccbcf07","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1455.0,"y":370.0}],"radius":0.0,"height":55.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1259c805-ca6c-4255-a546-aa72055af7b2","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1628.0,"y":596.2}],"radius":0.0,"height":63.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0d744837-823b-43df-8bfb-79fc21140a01","name":"Manter processo aberto na unidade até finalização do monitoramento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1570.0,"y":764.2}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6d6d9656-deec-410b-b535-9135d0fa6294","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1669.0,"y":904.4001}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"4d9ea49d-63ba-41e4-b299-be5795782bc0","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1739.0,"y":1269.50012}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"6064939f-4b1f-4a2f-b2f6-cd4d46c8a6ac","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1897.0,"y":1284.50012}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e69ef0aa-5d34-476e-b820-4ef52012a09b","name":"Servidores ou estágiários","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":287.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"70669db2-d653-46a0-8f94-4b5df7a76423","name":"Chefia imediata","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":307.0}],"radius":0.0,"height":235.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4343a1b6-b7b4-44c1-bc4f-02ad15d3f021","name":"DIBEST","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":542.0}],"radius":0.0,"height":321.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"038c424a-c282-4c08-ba31-92c123244659","name":"COE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":863.0}],"radius":0.0,"height":336.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"04632c92-df1f-4a76-87e3-c421d72ce48f","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1199.0}],"radius":0.0,"height":199.3,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"ac994f61-eeb9-41ac-800f-368d661ccd85","containerName":"[DBESST] 07 Realizar telemonitoramento de servidores","isSubprocess":false,"elements":[{"id":"d5be0c81-d7ac-40a1-8d3a-e30a9f00b966","value":"[DBESST] 07 Realizar telemonitoramento de servidores"},{"id":"e69ef0aa-5d34-476e-b820-4ef52012a09b","value":"Servidores ou estágiários"},{"id":"70669db2-d653-46a0-8f94-4b5df7a76423","value":"Chefia imediata"},{"id":"4343a1b6-b7b4-44c1-bc4f-02ad15d3f021","value":"DIBEST"},{"id":"038c424a-c282-4c08-ba31-92c123244659","value":"COE"},{"id":"04632c92-df1f-4a76-87e3-c421d72ce48f","value":"DIARQ"},{"id":"57e312fe-6a12-4162-b446-4c2c0a197863","value":""},{"id":"3d41ca7f-c771-42ea-96fd-24892edec765","value":"Abrir processo de monitoramente referente à COVID-19"},{"id":"5b232cc7-62d6-44b9-8d39-3edfccd5a82f","value":"Dar ciência no processo"},{"id":"54648965-0a70-4bca-965c-2c711d83a282","value":"Comunicar chefia imediata,  DIBEST e COE"},{"id":"5b658005-96d6-4efb-b1d8-e7b2f8c199bb","value":"Iniciar Protocolos de acolhimento, atendimento e apoio social"},{"id":"06114f7b-894e-4194-b35b-8856a4ec721d","value":""},{"id":"3c7a2215-2e68-478d-bc9a-a92b3f37dddd","value":"[COE] 02 Telemonitorar pessoas com sintomas de COVID-19"},{"id":"49113fa2-dfd1-4243-9c0f-0e0ebe585a50","value":"Incluir documento 872 - Despacho simples"},{"id":"57776e41-6e5b-4472-bd9e-5bc3fd9c4377","value":"Incluir documento 247 - Telemonitoramento COVID-19"},{"id":"473a369b-6fc7-47a8-8f98-e80e1c163131","value":"Realizar orientações e acompanhamentos dos contactantes na UFCSPA\r"},{"id":"25034bef-3232-4ea6-8565-f8f064c67b19","value":"Orientar sobre abertura de processo de licença saúde"},{"id":"d55334d0-9909-4ab3-b0a0-7dbaa45e8b02","value":"Sem sintomas por 10 dias?"},{"id":"25842054-5c86-4621-bcfc-dd51bda74359","value":"Sem febre e sem uso de antitérminco por 24h?"},{"id":"65b5a51d-4f21-4251-9e24-b47aeccbcf07","value":"Dar ciência no processo"},{"id":"0d744837-823b-43df-8bfb-79fc21140a01","value":"Manter processo aberto na unidade até finalização do monitoramento"},{"id":"6d6d9656-deec-410b-b535-9135d0fa6294","value":""},{"id":"6064939f-4b1f-4a2f-b2f6-cd4d46c8a6ac","value":""},{"id":"acf25454-a390-4749-b90a-4665cf1c5d8d","value":""},{"id":"49c06f0f-18eb-4501-8721-7c9d90d25e47","value":"Fazer rastreio inicial dos contactantes na UFCSPA e tempo de isolamento"},{"id":"ba58dbb1-6abf-480d-8305-22e8825a3981","value":"Comunicar DIBEST"},{"id":"23f67ca3-e440-4274-9a26-c9a9dfbdbdf9","value":""},{"id":"1259c805-ca6c-4255-a546-aa72055af7b2","value":"Incluir documento 872 - Despacho simples"},{"id":"4d9ea49d-63ba-41e4-b299-be5795782bc0","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"f182059a-90e2-4925-89fa-346446058fcd","value":""},{"id":"c6650b57-a281-41c8-9678-e3fdb01f3782"},{"id":"8816d6b0-6cd2-4681-b5ed-b5c5adc13f29"},{"id":"233788a1-3049-4699-8c76-0358145f01bd"},{"id":"715574aa-9cff-408e-8b7d-92c764ba1baf"},{"id":"2d1c694b-5ac4-42a8-a968-c352008749e6"},{"id":"b6826fd2-5eac-427c-b542-257648d1cb1b"},{"id":"783b2ac2-f849-4ab2-8e17-86d0861bfda5"},{"id":"3c946c27-dfdf-4d26-990d-bdccbf3fdb2f"},{"id":"d1bd298f-0b8b-4f3e-9844-e579cba6a474"},{"id":"4c5ce094-5d61-4792-b155-8a5c468d20b1"},{"id":"e67348f2-b3a9-442a-878d-c0d2dc7dce5f"},{"id":"447afcad-fda7-463f-9c2a-10a1eccf0c24"},{"id":"01ada74b-67f6-41ae-9b59-71ead8661355"},{"id":"4b8a816f-888e-4abc-ba43-16d0f1ce8313"},{"id":"145c3cc1-98c1-49b7-80e1-0fd2a0e5542d"},{"id":"555d049b-5a07-401d-8c0a-61d9b5c8f7f8"}]}]}