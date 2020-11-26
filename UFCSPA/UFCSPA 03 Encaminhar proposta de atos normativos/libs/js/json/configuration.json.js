Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[UFCSPA] 03 Encaminhar proposta de atos normativos","publishDate":"23/11/2020 12:38:31","pages":[{"id":"5567961b-2316-4431-a359-ac74664b0729","name":"[UFCSPA] 03 Encaminhar proposta de atos normativos","version":"1.0","author":"ariel","image":"files\\diagrams\\UFCSPA]_03_Encaminhar_proposta_de_atos_normativos.png","isSubprocessPage":false,"elements":[{"id":"f8fbdd75-d2f3-4e3c-b08e-f0d1907788ed","name":"[UFCSPA] 03 Encaminhar proposta de atos normativos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2025.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"547443f9-f2f8-406b-a816-e7f3e24f537d","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":168.0,"y":150.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"25e94cd9-af6e-425d-9db9-7a1fb2b1788d","name":"Abrir processo de encaminhamento de propostas de atos normativos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":263.0,"y":118.0}],"radius":0.0,"height":94.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0587a50-8933-47e0-9854-8906c40accb7","name":"Incluir documento 018 - Encaminhamento de proposta ato normativo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":464.0,"y":117.0}],"radius":0.0,"height":97.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9b973f58-703b-4f7b-b283-a45d03160b24","name":"Incluir documento 017 - Minuta de ato normativo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":472.0,"y":250.0}],"radius":0.0,"height":77.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4c7fe16c-7e6b-4001-9945-b8dbc272b4b8","name":"Examinar proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":440.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8ec6a830-c2c3-4046-9f41-5bd3da61fd41","name":"Necessita análise da Procuradoria?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":509.0,"y":550.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d3014f58-a50d-4523-b138-3164a50f8dd7","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":703.0,"y":550.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Necessita alterações?","elementType":"SequenceFlow","properties":[]}]},{"id":"b13df3ce-dc1c-4565-9397-994bcb0ecd94","name":"Necessita alterações?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":703.0,"y":450.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"83a26046-26ff-41ad-a768-967f076233d5","name":"Realizar alterações solicitadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":678.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"097811c4-0284-420d-a823-5907e4b1444c","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":867.0,"y":440.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5e4631bb-b296-4acc-a48b-ef1d73021642","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":860.0,"y":605.0}],"radius":0.0,"height":70.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eccedd17-e3d0-41fe-ae24-4a7ddd1336b1","name":"Comunicar à Câmara ou Comissão que fará a análise do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":857.5,"y":823.0}],"radius":0.0,"height":80.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5371b4f7-8368-408a-9df1-4fa911557ad6","name":"Analisar proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":867.0,"y":1339.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cd0dc6bc-85d5-4bd7-b771-1cb5e1728898","name":"Necessita adequações?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1132.0,"y":1349.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3ce22cca-0d97-4222-a6c4-1c1451497951","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1107.0,"y":1222.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6d3d3745-d152-40e6-8926-a6cbc0a92672","name":"Realizar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1107.0,"y":265.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a268471a-4f89-4b32-9b88-5c33bd27313f","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1291.0,"y":1339.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"233bad75-f25d-4523-9aba-db0499d90ad5","name":"[SECON] 12 Pautar as sessões dos Conselhos Superiores","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1291.0,"y":1046.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"http://nqi.ufcspa.edu.br/wiki/processos/SECON/%5BSECON%5D%2012%20Pautar%20as%20sess%C3%B5es%20dos%20Conselhos%20Superiores/","type":"url"}},{"id":"49b9ba12-574e-4991-a749-e779a2090c38","name":"Incluir documento 173 - Resolução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1284.0,"y":921.0}],"radius":0.0,"height":71.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2b5a907b-f8a0-4906-a296-d3fb34ae869e","name":"Necessita consulta pública?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1316.0,"y":827.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4980983f-8808-4cf6-bcda-9d753bfdb5e9","name":"[UFCSPA] 04 Realizar consulta pública","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1291.0,"y":440.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"http://nqi.ufcspa.edu.br/wiki/processos/UFCSPA/%5BUFCSPA%5D%2004%20Solicitar%20informa%C3%A7%C3%B5es%20eventuais%20entre%20unidades%20da%20UFCSPA/","type":"url"}},{"id":"d1157376-6cd9-4ff7-92c5-744b19ef8a8d","name":"Enviar a resolução à Pró-reitoria responsável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1442.0,"y":811.0}],"radius":0.0,"height":73.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"108adbac-508d-485c-8471-a61b41b31a55","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1448.0,"y":1888.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d7b8bc2-ebfb-4046-b925-e280ec58f1d2","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1478.0,"y":1980.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"abc8d93a-fcff-4aac-83b4-47d641201251","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":636.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3453496-7240-4a8f-b43e-700714987df9","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":1520.0}],"radius":0.0,"height":72.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1adcb1ae-e047-4db6-a66a-64307823d159","name":"Incluir documento 056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":1702.0}],"radius":0.0,"height":72.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fd769b8-5140-421c-b47f-7fac7b9e57f9","name":"Analisar parecer da Procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":678.0,"y":639.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d6d8d3e7-dae3-4aac-97db-3665ae696aff","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":356.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9cae3a81-d1d3-4f89-9dae-0d5fc26ecc87","name":"Pró-reitoria responsável","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":376.0}],"radius":0.0,"height":393.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f70d105d-2f3d-492e-aa18-9e6adbae0c60","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":769.0}],"radius":0.0,"height":398.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a79e0352-c875-429a-8d52-948e1abce80c","name":"Câmara ou Comissão dos Conselhosm Superiores","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1167.8}],"radius":0.0,"height":277.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a8d3d13b-d337-4514-8cc8-44e75ef7b521","name":"GR","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1444.8}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"61fffb32-1e27-497c-92d2-28f252f88d74","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1644.8}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"bfd67596-6858-4804-bf80-75c0ba4089e6","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1844.8}],"radius":0.0,"height":200.199951,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"5567961b-2316-4431-a359-ac74664b0729","containerName":"[UFCSPA] 03 Encaminhar proposta de atos normativos","isSubprocess":false,"elements":[{"id":"f8fbdd75-d2f3-4e3c-b08e-f0d1907788ed","value":"[UFCSPA] 03 Encaminhar proposta de atos normativos"},{"id":"d6d8d3e7-dae3-4aac-97db-3665ae696aff","value":"Interessado"},{"id":"9cae3a81-d1d3-4f89-9dae-0d5fc26ecc87","value":"Pró-reitoria responsável"},{"id":"f70d105d-2f3d-492e-aa18-9e6adbae0c60","value":"SECON"},{"id":"a79e0352-c875-429a-8d52-948e1abce80c","value":"Câmara ou Comissão dos Conselhosm Superiores"},{"id":"a8d3d13b-d337-4514-8cc8-44e75ef7b521","value":"GR"},{"id":"61fffb32-1e27-497c-92d2-28f252f88d74","value":"PFUFCSPA"},{"id":"bfd67596-6858-4804-bf80-75c0ba4089e6","value":"DIARQ"},{"id":"25e94cd9-af6e-425d-9db9-7a1fb2b1788d","value":"Abrir processo de encaminhamento de propostas de atos normativos"},{"id":"547443f9-f2f8-406b-a816-e7f3e24f537d","value":""},{"id":"b0587a50-8933-47e0-9854-8906c40accb7","value":"Incluir documento 018 - Encaminhamento de proposta ato normativo"},{"id":"4c7fe16c-7e6b-4001-9945-b8dbc272b4b8","value":"Examinar proposta"},{"id":"b13df3ce-dc1c-4565-9397-994bcb0ecd94","value":"Necessita alterações?"},{"id":"9b973f58-703b-4f7b-b283-a45d03160b24","value":"Incluir documento 017 - Minuta de ato normativo"},{"id":"83a26046-26ff-41ad-a768-967f076233d5","value":"Realizar alterações solicitadas"},{"id":"8ec6a830-c2c3-4046-9f41-5bd3da61fd41","value":"Necessita análise da Procuradoria?"},{"id":"abc8d93a-fcff-4aac-83b4-47d641201251","value":"Incluir documento 011 - Ofício"},{"id":"a3453496-7240-4a8f-b43e-700714987df9","value":"Incluir documento 872 - Despacho simples"},{"id":"1adcb1ae-e047-4db6-a66a-64307823d159","value":"Incluir documento 056 - Parecer procuradoria"},{"id":"6fd769b8-5140-421c-b47f-7fac7b9e57f9","value":"Analisar parecer da Procuradoria"},{"id":"5e4631bb-b296-4acc-a48b-ef1d73021642","value":"Incluir documento 872 - Despacho simples"},{"id":"eccedd17-e3d0-41fe-ae24-4a7ddd1336b1","value":"Comunicar à Câmara ou Comissão que fará a análise do processo"},{"id":"5371b4f7-8368-408a-9df1-4fa911557ad6","value":"Analisar proposta"},{"id":"cd0dc6bc-85d5-4bd7-b771-1cb5e1728898","value":"Necessita adequações?"},{"id":"3ce22cca-0d97-4222-a6c4-1c1451497951","value":"Incluir documento 191 - Parecer"},{"id":"6d3d3745-d152-40e6-8926-a6cbc0a92672","value":"Realizar adequações"},{"id":"097811c4-0284-420d-a823-5907e4b1444c","value":"Incluir documento 191 - Parecer"},{"id":"d3014f58-a50d-4523-b138-3164a50f8dd7","value":""},{"id":"a268471a-4f89-4b32-9b88-5c33bd27313f","value":"Incluir documento 191 - Parecer"},{"id":"233bad75-f25d-4523-9aba-db0499d90ad5","value":"[SECON] 12 Pautar as sessões dos Conselhos Superiores"},{"id":"2b5a907b-f8a0-4906-a296-d3fb34ae869e","value":"Necessita consulta pública?"},{"id":"108adbac-508d-485c-8471-a61b41b31a55","value":"Realizar tratamento arquivístico"},{"id":"8d7b8bc2-ebfb-4046-b925-e280ec58f1d2","value":""},{"id":"49b9ba12-574e-4991-a749-e779a2090c38","value":"Incluir documento 173 - Resolução"},{"id":"d1157376-6cd9-4ff7-92c5-744b19ef8a8d","value":"Enviar a resolução à Pró-reitoria responsável"},{"id":"4980983f-8808-4cf6-bcda-9d753bfdb5e9","value":"[UFCSPA] 04 Realizar consulta pública"},{"id":"9b7a4ff3-e693-40e7-97db-a19776373d53"},{"id":"dcd90530-0a64-417e-86c4-e061212ed28f"},{"id":"ea52c412-8354-4150-a6b5-c046ecc30a3c"},{"id":"43a3ac2f-01d4-4684-86fc-c081de9ce320"},{"id":"5a7a0a01-658b-4249-b469-afea3b830219"},{"id":"5cb7c546-e54f-4857-b764-905fa952322d"}]}]}