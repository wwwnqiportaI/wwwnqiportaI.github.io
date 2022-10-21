Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROPPG] 43 Realizar qualificação de trabalho de pós-graduação stricto sensu","publishDate":"19/10/2022 15:20:08","pages":[{"id":"b6c592db-f135-417c-83e4-2428fd951512","name":"[PROPPG] 43 Realizar qualificação de trabalho de pós-graduação stricto sensu","version":"1.0","author":"patyg","image":"files\\diagrams\\PROPPG]_43_Realizar_qualificacao_de_trabalho_de_pos_graduacao_stricto_sensu.png","isSubprocessPage":false,"elements":[{"id":"eb674c25-66ec-4c1e-a474-37524575c6d7","name":"[PROPPG] 43 Realizar qualificação de trabalho de pós-graduação stricto sensu","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2221.8,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"4f04692c-4a3b-4ca5-bfec-d9c0868f50d4","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":110.0,"y":84.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"a1c67c78-af37-4230-a965-87bab487fc41","name":"Abrir processo de qualificação de trabalho de pós-graduação stricto sensu","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":188.5,"y":61.0}],"radius":0.0,"height":76.0,"width":135.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4835efba-12b9-4bb9-9568-b8c15a733449","name":"Incluir documento 509 - Indicação de banca de qualificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":165.0}],"radius":0.0,"height":66.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"953000fd-88c0-4e42-8a09-523c4a064470","name":"Incluir em PDF projeto de pesquisa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":259.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0772fae-33b3-49b8-8b1a-1e350491f1fa","name":"Liberar acesso externo para o aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":521.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e81f7d1-abad-46eb-af26-726d535c9b1d","name":"Encaminhar para o PPG responsável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":617.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b68b3bcf-c62e-44d6-9bed-7da4f243edde","name":"Analisar a indicação da banca ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":966.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a6a4a4d8-f873-4a47-9c2c-fddb4a17571d","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":203.0,"y":1080.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c56dd08-4e10-4284-874f-37e962434b9d","name":"Informar orientador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":1198.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24812d01-a422-4d1f-a346-775c5aa26a6c","name":"A indicação de banca foi aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":235.0,"y":1319.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7bd744b9-6a70-4b89-914b-db6a34446c7d","name":"Realizar nova indicação de membros para a banca","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":442.0,"y":158.0}],"radius":0.0,"height":73.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b69f74d2-5faa-48c1-a4c3-702a1301ad5b","name":"Houve alguma mudança de data e/ou hora em relação ao formulário inicial?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":635.0,"y":390.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"719d3769-1466-471b-ad0d-b59b18c840f0","name":"Verificar a disponibilidade dos membros da banca","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":732.0,"y":376.0}],"radius":0.0,"height":68.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c34b3b03-e7af-44f3-8d8a-585e324107c6","name":"Membros possuem disponibilidade na nova data/hora marcada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":935.5,"y":280.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1719a7fd-cf20-4e2e-af5f-018c594c3c67","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":904.5,"y":387.0}],"radius":0.0,"height":60.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5d8743a3-3e42-48f5-9f88-8be251ad28ff","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":935.0,"y":972.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"A banca será presencial ?","elementType":"SequenceFlow","properties":[]}]},{"id":"f628edbe-a2e0-417c-95fe-4089af1b227c","name":"A banca será presencial ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":935.0,"y":1069.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ed7be06b-ec90-4b75-8459-eb496eedf78a","name":"[NAS] 03 Reservar salas para atividades dos PPG","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1111.0,"y":1059.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"d74396bc-df0e-4310-98b7-73bc77ba5424","name":"Incluir documento 279 - Carta convite","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":908.0,"y":1165.0}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a7eb7204-a2a2-49be-81ad-9c85e09d3922","name":"Enviar convite aos membros da banca","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1109.0,"y":1270.0}],"radius":0.0,"height":64.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0318d5b5-23c2-4efa-beaf-8cfe8e710330","name":"Divulgar a banca de qualificação aos alunos e professores do PPG","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1099.0,"y":1410.0}],"radius":0.0,"height":73.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d0afea5b-7032-4284-ba94-761edcd7f786","name":"Realizar qualificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1279.0,"y":1416.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e6723f36-8e31-433f-bf91-35e9115516cd","name":"Incluir documento 510 - Ata de qualificação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1279.0,"y":1590.0}],"radius":0.0,"height":68.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fd6c489-47c9-4501-8c96-2fc45af1d68b","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1569.0,"y":295.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"ec94d9cd-c8e5-43ba-a827-a11e22680346","name":"Assinar a ata de qualificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1691.0,"y":805.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c1a967b-f459-49b4-930c-3db385ee0bb5","name":"Salvar uma via da ata no drive do programa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1691.0,"y":1075.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fc1acc1b-c764-4c59-ba8e-ebbc040a590b","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1691.0,"y":1183.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7db1ee30-6431-4096-84d3-da4b46807e5b","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1721.0,"y":1906.8}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"fa204ff8-a0d5-4523-b3a8-595e06c88d1b","name":"Incluir documento 146 - Certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1902.5,"y":1355.0}],"radius":0.0,"height":62.0,"width":91.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23876296-0abe-4bc4-ac03-1e80cfc9d329","name":"Encaminhar os certificados  aos docentes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1902.0,"y":1492.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"20fd421e-0c92-4296-a526-1b2d59a61ba7","name":"Incluir documento 872 - Despacho simples  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1902.0,"y":1604.0}],"radius":0.0,"height":74.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5f2f912e-8c46-4880-9932-5d5cc6a8a381","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1902.0,"y":2100.8}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"31b43bb1-ffb5-4280-80db-b7e523afaed5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2075.0,"y":2115.8}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"9a6a621b-88d4-4f94-95a7-0dd7ce37e668","name":"Professor orientador","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":477.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b47edd81-e7dc-4c4a-95db-406412274a63","name":"CPGS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":497.0}],"radius":0.0,"height":230.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"999d95c5-6d42-4d02-b973-a7c9e4eb329f","name":"Coordenador do programa","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":727.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"851bbd66-d4cf-4feb-87de-7957639ffecf","name":"PPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":927.0}],"radius":0.0,"height":914.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4cc9501f-363b-4d83-b397-e02cd9373136","name":"Professor Presidente da Banca","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1841.8}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ad0b6b07-4047-4e22-80df-5fed24b74f03","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2041.8}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"b6c592db-f135-417c-83e4-2428fd951512","containerName":"[PROPPG] 43 Realizar qualificação de trabalho de pós-graduação stricto sensu","isSubprocess":false,"elements":[{"id":"eb674c25-66ec-4c1e-a474-37524575c6d7","value":"[PROPPG] 43 Realizar qualificação de trabalho de pós-graduação stricto sensu"},{"id":"9a6a621b-88d4-4f94-95a7-0dd7ce37e668","value":"Professor orientador"},{"id":"b47edd81-e7dc-4c4a-95db-406412274a63","value":"CPGS"},{"id":"999d95c5-6d42-4d02-b973-a7c9e4eb329f","value":"Coordenador do programa"},{"id":"851bbd66-d4cf-4feb-87de-7957639ffecf","value":"PPG"},{"id":"4cc9501f-363b-4d83-b397-e02cd9373136","value":"Professor Presidente da Banca"},{"id":"ad0b6b07-4047-4e22-80df-5fed24b74f03","value":"DIARQ"},{"id":"4f04692c-4a3b-4ca5-bfec-d9c0868f50d4","value":""},{"id":"a1c67c78-af37-4230-a965-87bab487fc41","value":"Abrir processo de qualificação de trabalho de pós-graduação stricto sensu"},{"id":"4835efba-12b9-4bb9-9568-b8c15a733449","value":"Incluir documento 509 - Indicação de banca de qualificação"},{"id":"953000fd-88c0-4e42-8a09-523c4a064470","value":"Incluir em PDF projeto de pesquisa"},{"id":"b0772fae-33b3-49b8-8b1a-1e350491f1fa","value":"Liberar acesso externo para o aluno"},{"id":"7e81f7d1-abad-46eb-af26-726d535c9b1d","value":"Encaminhar para o PPG responsável"},{"id":"b68b3bcf-c62e-44d6-9bed-7da4f243edde","value":"Analisar a indicação da banca "},{"id":"a6a4a4d8-f873-4a47-9c2c-fddb4a17571d","value":"Incluir documento 872 - despacho simples"},{"id":"24812d01-a422-4d1f-a346-775c5aa26a6c","value":"A indicação de banca foi aprovada?"},{"id":"6c56dd08-4e10-4284-874f-37e962434b9d","value":"Informar orientador"},{"id":"7bd744b9-6a70-4b89-914b-db6a34446c7d","value":"Realizar nova indicação de membros para a banca"},{"id":"fc1acc1b-c764-4c59-ba8e-ebbc040a590b","value":"Incluir documento 191 - Parecer"},{"id":"fa204ff8-a0d5-4523-b3a8-595e06c88d1b","value":"Incluir documento 146 - Certificado"},{"id":"23876296-0abe-4bc4-ac03-1e80cfc9d329","value":"Encaminhar os certificados  aos docentes"},{"id":"7c1a967b-f459-49b4-930c-3db385ee0bb5","value":"Salvar uma via da ata no drive do programa"},{"id":"31b43bb1-ffb5-4280-80db-b7e523afaed5","value":""},{"id":"719d3769-1466-471b-ad0d-b59b18c840f0","value":"Verificar a disponibilidade dos membros da banca"},{"id":"1719a7fd-cf20-4e2e-af5f-018c594c3c67","value":"Incluir documento 872 - Despacho simples"},{"id":"f628edbe-a2e0-417c-95fe-4089af1b227c","value":"A banca será presencial ?"},{"id":"0318d5b5-23c2-4efa-beaf-8cfe8e710330","value":"Divulgar a banca de qualificação aos alunos e professores do PPG"},{"id":"e6723f36-8e31-433f-bf91-35e9115516cd","value":"Incluir documento 510 - Ata de qualificação "},{"id":"a7eb7204-a2a2-49be-81ad-9c85e09d3922","value":"Enviar convite aos membros da banca"},{"id":"6fd6c489-47c9-4501-8c96-2fc45af1d68b","value":"Assinar documento em bloco"},{"id":"7db1ee30-6431-4096-84d3-da4b46807e5b","value":"Assinar documento em bloco"},{"id":"20fd421e-0c92-4296-a526-1b2d59a61ba7","value":"Incluir documento 872 - Despacho simples  "},{"id":"ec94d9cd-c8e5-43ba-a827-a11e22680346","value":"Assinar a ata de qualificação"},{"id":"5f2f912e-8c46-4880-9932-5d5cc6a8a381","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"ed7be06b-ec90-4b75-8459-eb496eedf78a","value":"[NAS] 03 Reservar salas para atividades dos PPG"},{"id":"5d8743a3-3e42-48f5-9f88-8be251ad28ff","value":""},{"id":"d74396bc-df0e-4310-98b7-73bc77ba5424","value":"Incluir documento 279 - Carta convite"},{"id":"d0afea5b-7032-4284-ba94-761edcd7f786","value":"Realizar qualificação"},{"id":"b69f74d2-5faa-48c1-a4c3-702a1301ad5b","value":"Houve alguma mudança de data e/ou hora em relação ao formulário inicial?"},{"id":"c34b3b03-e7af-44f3-8d8a-585e324107c6","value":"Membros possuem disponibilidade na nova data/hora marcada?"},{"id":"2c52aa27-f50e-47e1-b3d6-3c90cd3de00c"},{"id":"c0413bd4-bc8c-4622-81e6-4813f8391535"},{"id":"21e8202f-8613-4873-82d1-873fbf7b8d63"},{"id":"3abfe034-5f5b-496e-9394-fd408e2fdce7"},{"id":"cc1bbcbe-6e4c-4a36-9df6-4c606fb0cd06"},{"id":"1e398157-20ef-4260-946f-9a9b07133e5b"},{"id":"8d8e9ace-6568-4793-8289-f6a7ab040283"},{"id":"c4d5d386-bb4a-4710-9d28-8c1c6bee9431"},{"id":"183d05df-113d-471d-9865-c69314cdf6d0"},{"id":"fcd77f10-58e0-4226-8b07-f4e84124a62a"},{"id":"8684d227-c2d8-4f23-985b-25f791287684"},{"id":"0aced30a-7140-489f-a4bb-0231aa6cd598"},{"id":"0c1d421a-0889-4130-bf6e-244aca3ecde7"},{"id":"121827a1-9f8d-4014-9e8a-601079540ded"},{"id":"b49bf684-d657-406e-9f11-e9fec9532e11"},{"id":"bc9551e3-90a2-4f4d-85d4-342755853de1"},{"id":"29881dd0-dbb4-419a-8d24-46ffd6206036"},{"id":"1c0b7d4e-27da-4858-93fc-6db44b0d2e89"},{"id":"17996827-c3e5-49e2-b3d1-057ed9d8a73a"},{"id":"e5818be1-a321-4771-87c6-d9e0d4693891"},{"id":"81381d48-2f8a-4f65-810e-2c1aee41510f"},{"id":"9b72cd04-48e1-4895-a8fe-e3885e8dc2f8"},{"id":"6cd54494-38e7-4c41-8e9b-cc6f68731d03"},{"id":"a0729f7b-2b78-40b5-a4b8-bcb56d5d7d72"},{"id":"3e924d96-9c2a-499b-a84e-45f534d9352d"},{"id":"9e07e590-7f9f-4bb9-b203-1a2d42e283e5"}]}]}