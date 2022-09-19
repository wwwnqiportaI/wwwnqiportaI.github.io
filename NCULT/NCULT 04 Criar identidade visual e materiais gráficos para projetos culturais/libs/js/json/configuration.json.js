Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NCULT] 04 Criar identidade visual e materiais gráficos para projetos culturais","publishDate":"19/09/2022 14:43:04","pages":[{"id":"abc1d07e-6e5f-4abb-b9e8-5418d99dcf54","name":"[NCULT] 04 Criar identidade visual e materiais gráficos para projetos culturais","version":"1.0","author":"alineg","image":"files\\diagrams\\NCULT]_04_Criar_identidade_visual_e_materiais_graficos_para_projetos_culturais.png","isSubprocessPage":false,"elements":[{"id":"bcfb999a-0db6-4636-9419-b9e1fe37244c","name":"[NCULT] 04 Criar identidade visual e materiais gráficos para projetos culturais","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1011.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6a3fb79d-0440-4c32-b61d-a975ddb74422","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":146.0,"y":172.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"2a2ed801-3f88-475b-963e-94e4d48e637d","name":"Identificar necessidade de criação gráfica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":245.0,"y":157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"63e23de2-6ee2-4f9a-aeb3-2aeddf54a458","name":"Trata-se da criação de logotipo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":431.0,"y":167.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"49bfe3a7-858e-4230-a2d4-a16a3f7d11d9","name":"[NCULT] 04-01 Criar logotipo para projeto cultural","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":553.0,"y":157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NCULT] 04-01 Criar logotipo para projeto cultural - [NCULT] 04-01 Criar logotipo para projeto cultural","type":"url","pageRef":"9a10e6c7-73a8-4a09-ad09-baefac722716","processPageRef":"d0f81f3d-fa8a-4705-8a58-2f35b1450aa0"}]},{"id":"c14e7e4f-1cdb-407e-93f3-fd20e17cef61","name":"Apresentar a proposta de logotipo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":713.0,"y":157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d819abf7-2478-4b6c-ace5-000234d66a18","name":"Avaliar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":713.0,"y":857.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"14c1433a-84e8-4d4b-a3f4-158e2e5bfe16","name":"A proposta foi aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":916.0,"y":167.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Parcialmente","elementType":"SequenceFlow","properties":[]}]},{"id":"3c0f1c25-398a-4e58-a6eb-67d808d7a440","name":"É a terceira proposta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":916.0,"y":337.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d44485d8-b018-43ff-836f-b3242bfa13b6","name":"Orientar a escolha de uma das propostas desenvolvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":891.0,"y":435.0}],"radius":0.0,"height":69.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74ff4d95-1d98-4dda-9980-5c2c1e9bbdc5","name":"Escolher uma das propostas desenvolvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":891.0,"y":937.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"33a91e35-2168-4762-8b1b-eb052d8ad45a","name":"Realizar modificações ou ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1048.0,"y":157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2347710b-fe27-47f0-96bb-6530ed5acaba","name":"Apresentar nova versão da proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1048.0,"y":257.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4da880ff-e137-4d17-a5c6-6260cee7fb2a","name":"Finalizar o logotipo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1176.0,"y":156.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d8f07cb4-8f3e-4d93-bb76-a3f659aaea22","name":"Elaborar as versões do logotipo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1306.0,"y":156.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d2da3ad-30c2-4561-88ae-d8d70ce7a194","name":"Redigir orientações de aplicação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1306.0,"y":260.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b9974109-c43f-49e2-abb2-455d35c353f9","name":"Enviar arquivos para uso ao agente cultural","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1306.0,"y":359.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0bfd2626-c815-4452-8f03-abcd5e89699e","name":"É necessária a criação de outros materiais gráficos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1459.0,"y":369.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"906aaed6-be9c-4067-91dc-2a5374840e03","name":"[NCULT] 04-02 Criar material de identificação para projeto cultural","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1590.0,"y":359.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NCULT] 04-02 Criar material de identificação para projeto cultural - [NCULT] 04-02 Criar material de identificação para projeto cultural","type":"url","pageRef":"c0e8aac5-b6d0-45a2-bb88-3b8d63e0db2d","processPageRef":"c2573e01-1428-4867-b5dc-91762ebd2360"}]},{"id":"3bcdaffa-7d36-432c-a0d0-e7aea19f7410","name":"Enviar a proposta de projeto gráfico do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1763.0,"y":357.0}],"radius":0.0,"height":64.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9c520b8c-5653-4006-8068-2aa2b6992e61","name":"Avaliar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1763.0,"y":853.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0121d950-43f3-4795-93a3-0c4342d28efd","name":"A proposta foi aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1967.0,"y":374.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Parcialmente","elementType":"SequenceFlow","properties":[]}]},{"id":"4bd51685-1b21-4a2b-968c-eca6a02ea413","name":"É a segunda proposta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1967.0,"y":540.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b996ce0b-4fbf-4f75-89e9-e392d0c1dd9e","name":"Orientar a escolha de uma das propostas desenvolvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1940.0,"y":644.0}],"radius":0.0,"height":62.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6a3aa110-4d4c-4d9f-8e4b-a687a6638f48","name":"Escolher uma das propostas desenvolvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1942.0,"y":937.6}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aa1d5635-71e3-473a-af88-30ee76b8ce21","name":"Realizar modificações ou ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2108.0,"y":364.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea9c13c0-9be2-454d-8788-12a9e54451a4","name":"Apresentar nova versão da proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2108.0,"y":461.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"71f373fe-2105-4b2e-aa42-5a713bb7ad6e","name":"Finalizar o projeto gráfico do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2244.0,"y":364.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"77e5b7d6-cfbd-461c-92fe-8d623185b99e","name":"Trata-se de um produto físico?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2390.0,"y":374.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"a1435a80-a214-4f72-a3e0-6b0e8b14f09a","name":"Finalizar as peças gráficas digitais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2365.0,"y":478.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cde25952-58be-48b7-bf2c-b755afa01c98","name":"Enviar arquivos para uso ao agente cultural","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2365.0,"y":582.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ef4953ab-a635-46c9-a1d0-f25d81c54f07","name":"[NCULT] 11 Realizar a produção gráfica de materiais","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2517.0,"y":364.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/NCULT/NCULT%2011%20Realizar%20a%20produ%C3%A7%C3%A3o%20gr%C3%A1fica%20de%20materiais/#list","type":"url"}},{"id":"8adfc04c-59ff-439c-8407-58d86acf9a05","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2657.0,"y":379.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"7c85f4b4-0574-4ef4-a4fe-bb43f55687d1","name":"Programadora visual","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":791.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ced0ff3f-92fd-45fd-89c8-cee6b7db80d5","name":"Agente cultural","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":811.0}],"radius":0.0,"height":220.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"9a10e6c7-73a8-4a09-ad09-baefac722716","name":"[NCULT] 04-01 Criar logotipo para projeto cultural","version":"1.0","author":"aline","image":"files\\diagrams\\NCULT]_04_01_Criar_logotipo_para_projeto_cultural.png","isSubprocessPage":false,"elements":[{"id":"d0f81f3d-fa8a-4705-8a58-2f35b1450aa0","name":"[NCULT] 04-01 Criar logotipo para projeto cultural","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"3fc434b4-5099-42a5-9383-6771c7091cc4","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":174.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"886a7f58-a4a9-4597-95f2-8b9f0abb09bd","name":"Buscar informações sobre o projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38110c79-9886-41a7-9dd3-f9af26ae53e3","name":"Buscar referências visuais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":316.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bdba3eec-ab62-4623-a137-7d53a84813b0","name":"Elaborar uma ideia inicial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":435.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7962136e-2090-4df1-8cb2-09ebec7fdeb2","name":"Pesquisar imagens e fontes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":556.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b62971b-7b47-46b7-bee2-7497f177b774","name":"Instalar fontes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":682.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1be827b6-5c6d-49f7-b661-f90649c8fae6","name":"Tratar imagens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":809.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f6223002-50d2-4b30-8c3e-9bb8ee67d641","name":"Realizar a composição visual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":933.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2aa0feb5-0785-42cd-8eb4-0bb52a18cfd2","name":"Fazer testes de aplicação e impressão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1066.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b63e94ee-8640-451a-9c5b-87b61ad6d1c7","name":"Realizar últimos ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1199.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"51f3462f-55b6-427a-af13-56ebef0c59b6","name":"Finalizar proposta para apresentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1325.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a345dea0-e4d1-4f2c-bf4f-a6888d9501f3","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1451.0,"y":174.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e5ef17df-13ff-487c-929f-34f50fa8535d","name":"Programadora visual","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"c0e8aac5-b6d0-45a2-bb88-3b8d63e0db2d","name":"[NCULT] 04-02 Criar material de identificação para projeto cultural","version":"1.0","author":"aline","image":"files\\diagrams\\NCULT]_04_02_Criar_material_de_identificacao_para_projeto_cultural.png","isSubprocessPage":false,"elements":[{"id":"c2573e01-1428-4867-b5dc-91762ebd2360","name":"[NCULT] 04-02 Criar material de identificação para projeto cultural","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":313.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"bf5696af-e7fa-4d19-8b7a-0b9cf035e219","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":143.0,"y":160.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f28cc7f5-8bdb-4abc-a521-c6adac459a27","name":"Pesquisar a natureza e as características do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":211.0,"y":144.500015}],"radius":0.0,"height":61.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aaa102f9-019a-4266-920b-6be371debab6","name":"Pesquisar o processo de produção do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":332.0,"y":142.0}],"radius":0.0,"height":66.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"80c0e32c-f8be-4efb-8c83-d7c3adc73fb0","name":"Buscar informações sobre o projeto cultural","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":454.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a72cc6d1-5175-416f-9708-92fdebf255f4","name":"Acessar a identidade visual do projeto cultural","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.0,"y":142.0}],"radius":0.0,"height":66.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"beb729da-8436-4214-9f3d-9ecdb93fb206","name":"Buscar referências visuais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":703.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7033c988-1e2c-49de-a6eb-7c03edc91cf0","name":"Elaborar uma ideia inicial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":822.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"277be8d1-890c-4c1a-b478-edf984a77db0","name":"Pesquisar imagens e fontes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":949.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a626f1c4-d521-4fc1-b96c-5347f0250b88","name":"Instalar fontes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1077.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"488d4adb-279b-4909-8248-2c5b47473424","name":"Tratar imagens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1203.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99084dba-8885-49bd-984a-2169884a2db1","name":"Criar o projeto gráfico do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1326.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bcaf2ee8-0611-46fd-b53e-82d483568c35","name":"Fazer testes de impressão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1447.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ecfb87c9-63fe-42c6-94eb-ad479d423a12","name":"Realizar últimos ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1568.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d4c2f2a5-0797-4b75-8e1d-21d62688c88f","name":"Finalizar proposta para apresentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1692.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e434af18-d6bc-4f9c-9618-df86b898df94","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1811.0,"y":160.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e6d2e92f-4ea1-48d2-84fa-7d0bfe8cf25f","name":"Programadora visual","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":313.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9a10e6c7-73a8-4a09-ad09-baefac722716","containerName":"[NCULT] 04-01 Criar logotipo para projeto cultural","isSubprocess":false,"elements":[{"id":"d0f81f3d-fa8a-4705-8a58-2f35b1450aa0","value":"[NCULT] 04-01 Criar logotipo para projeto cultural"},{"id":"e5ef17df-13ff-487c-929f-34f50fa8535d","value":"Programadora visual"},{"id":"f6223002-50d2-4b30-8c3e-9bb8ee67d641","value":"Realizar a composição visual"},{"id":"38110c79-9886-41a7-9dd3-f9af26ae53e3","value":"Buscar referências visuais"},{"id":"886a7f58-a4a9-4597-95f2-8b9f0abb09bd","value":"Buscar informações sobre o projeto"},{"id":"7962136e-2090-4df1-8cb2-09ebec7fdeb2","value":"Pesquisar imagens e fontes"},{"id":"3fc434b4-5099-42a5-9383-6771c7091cc4","value":""},{"id":"b63e94ee-8640-451a-9c5b-87b61ad6d1c7","value":"Realizar últimos ajustes"},{"id":"2aa0feb5-0785-42cd-8eb4-0bb52a18cfd2","value":"Fazer testes de aplicação e impressão"},{"id":"bdba3eec-ab62-4623-a137-7d53a84813b0","value":"Elaborar uma ideia inicial"},{"id":"a345dea0-e4d1-4f2c-bf4f-a6888d9501f3","value":""},{"id":"51f3462f-55b6-427a-af13-56ebef0c59b6","value":"Finalizar proposta para apresentação"},{"id":"8b62971b-7b47-46b7-bee2-7497f177b774","value":"Instalar fontes"},{"id":"1be827b6-5c6d-49f7-b661-f90649c8fae6","value":"Tratar imagens"}]},{"containerId":"abc1d07e-6e5f-4abb-b9e8-5418d99dcf54","containerName":"[NCULT] 04 Criar identidade visual e materiais gráficos para projetos culturais","isSubprocess":false,"elements":[{"id":"bcfb999a-0db6-4636-9419-b9e1fe37244c","value":"[NCULT] 04 Criar identidade visual e materiais gráficos para projetos culturais"},{"id":"7c85f4b4-0574-4ef4-a4fe-bb43f55687d1","value":"Programadora visual"},{"id":"ced0ff3f-92fd-45fd-89c8-cee6b7db80d5","value":"Agente cultural"},{"id":"6a3fb79d-0440-4c32-b61d-a975ddb74422","value":""},{"id":"0bfd2626-c815-4452-8f03-abcd5e89699e","value":"É necessária a criação de outros materiais gráficos?"},{"id":"77e5b7d6-cfbd-461c-92fe-8d623185b99e","value":"Trata-se de um produto físico?"},{"id":"8adfc04c-59ff-439c-8407-58d86acf9a05","value":""},{"id":"c14e7e4f-1cdb-407e-93f3-fd20e17cef61","value":"Apresentar a proposta de logotipo"},{"id":"d819abf7-2478-4b6c-ace5-000234d66a18","value":"Avaliar a proposta"},{"id":"14c1433a-84e8-4d4b-a3f4-158e2e5bfe16","value":"A proposta foi aprovada?"},{"id":"4da880ff-e137-4d17-a5c6-6260cee7fb2a","value":"Finalizar o logotipo"},{"id":"d8f07cb4-8f3e-4d93-bb76-a3f659aaea22","value":"Elaborar as versões do logotipo"},{"id":"3bcdaffa-7d36-432c-a0d0-e7aea19f7410","value":"Enviar a proposta de projeto gráfico do material"},{"id":"63e23de2-6ee2-4f9a-aeb3-2aeddf54a458","value":"Trata-se da criação de logotipo?"},{"id":"9c520b8c-5653-4006-8068-2aa2b6992e61","value":"Avaliar a proposta"},{"id":"0121d950-43f3-4795-93a3-0c4342d28efd","value":"A proposta foi aprovada?"},{"id":"71f373fe-2105-4b2e-aa42-5a713bb7ad6e","value":"Finalizar o projeto gráfico do material"},{"id":"a1435a80-a214-4f72-a3e0-6b0e8b14f09a","value":"Finalizar as peças gráficas digitais"},{"id":"ef4953ab-a635-46c9-a1d0-f25d81c54f07","value":"[NCULT] 11 Realizar a produção gráfica de materiais"},{"id":"906aaed6-be9c-4067-91dc-2a5374840e03","value":"[NCULT] 04-02 Criar material de identificação para projeto cultural"},{"id":"3c0f1c25-398a-4e58-a6eb-67d808d7a440","value":"É a terceira proposta?"},{"id":"d44485d8-b018-43ff-836f-b3242bfa13b6","value":"Orientar a escolha de uma das propostas desenvolvidas"},{"id":"74ff4d95-1d98-4dda-9980-5c2c1e9bbdc5","value":"Escolher uma das propostas desenvolvidas"},{"id":"4d2da3ad-30c2-4561-88ae-d8d70ce7a194","value":"Redigir orientações de aplicação"},{"id":"b9974109-c43f-49e2-abb2-455d35c353f9","value":"Enviar arquivos para uso ao agente cultural"},{"id":"4bd51685-1b21-4a2b-968c-eca6a02ea413","value":"É a segunda proposta?"},{"id":"b996ce0b-4fbf-4f75-89e9-e392d0c1dd9e","value":"Orientar a escolha de uma das propostas desenvolvidas"},{"id":"6a3aa110-4d4c-4d9f-8e4b-a687a6638f48","value":"Escolher uma das propostas desenvolvidas"},{"id":"33a91e35-2168-4762-8b1b-eb052d8ad45a","value":"Realizar modificações ou ajustes"},{"id":"2347710b-fe27-47f0-96bb-6530ed5acaba","value":"Apresentar nova versão da proposta"},{"id":"aa1d5635-71e3-473a-af88-30ee76b8ce21","value":"Realizar modificações ou ajustes"},{"id":"ea9c13c0-9be2-454d-8788-12a9e54451a4","value":"Apresentar nova versão da proposta"},{"id":"cde25952-58be-48b7-bf2c-b755afa01c98","value":"Enviar arquivos para uso ao agente cultural"},{"id":"2a2ed801-3f88-475b-963e-94e4d48e637d","value":"Identificar necessidade de criação gráfica"},{"id":"49bfe3a7-858e-4230-a2d4-a16a3f7d11d9","value":"[NCULT] 04-01 Criar logotipo para projeto cultural"},{"id":"2a91a10b-1077-42ba-b41a-987ea419c428"},{"id":"ac545474-16ee-4370-82e6-bfb7ad0b6395"},{"id":"0ab36c25-4da7-47d7-b10a-08d14f65cbe8"},{"id":"8ca79f66-5aa9-47e6-bf04-bf7c1264e022"},{"id":"21a8175d-fbb2-4edf-8328-821a6403cec3"},{"id":"4bf33a99-cee5-4025-bee3-5abe6db24c66"}]},{"containerId":"c0e8aac5-b6d0-45a2-bb88-3b8d63e0db2d","containerName":"[NCULT] 04-02 Criar material de identificação para projeto cultural","isSubprocess":false,"elements":[{"id":"c2573e01-1428-4867-b5dc-91762ebd2360","value":"[NCULT] 04-02 Criar material de identificação para projeto cultural"},{"id":"e6d2e92f-4ea1-48d2-84fa-7d0bfe8cf25f","value":"Programadora visual"},{"id":"80c0e32c-f8be-4efb-8c83-d7c3adc73fb0","value":"Buscar informações sobre o projeto cultural"},{"id":"bf5696af-e7fa-4d19-8b7a-0b9cf035e219","value":""},{"id":"277be8d1-890c-4c1a-b478-edf984a77db0","value":"Pesquisar imagens e fontes"},{"id":"488d4adb-279b-4909-8248-2c5b47473424","value":"Tratar imagens"},{"id":"f28cc7f5-8bdb-4abc-a521-c6adac459a27","value":"Pesquisar a natureza e as características do material"},{"id":"aaa102f9-019a-4266-920b-6be371debab6","value":"Pesquisar o processo de produção do material"},{"id":"beb729da-8436-4214-9f3d-9ecdb93fb206","value":"Buscar referências visuais"},{"id":"7033c988-1e2c-49de-a6eb-7c03edc91cf0","value":"Elaborar uma ideia inicial"},{"id":"a72cc6d1-5175-416f-9708-92fdebf255f4","value":"Acessar a identidade visual do projeto cultural"},{"id":"e434af18-d6bc-4f9c-9618-df86b898df94","value":""},{"id":"99084dba-8885-49bd-984a-2169884a2db1","value":"Criar o projeto gráfico do material"},{"id":"ecfb87c9-63fe-42c6-94eb-ad479d423a12","value":"Realizar últimos ajustes"},{"id":"bcaf2ee8-0611-46fd-b53e-82d483568c35","value":"Fazer testes de impressão"},{"id":"d4c2f2a5-0797-4b75-8e1d-21d62688c88f","value":"Finalizar proposta para apresentação"},{"id":"a626f1c4-d521-4fc1-b96c-5347f0250b88","value":"Instalar fontes"}]}]}