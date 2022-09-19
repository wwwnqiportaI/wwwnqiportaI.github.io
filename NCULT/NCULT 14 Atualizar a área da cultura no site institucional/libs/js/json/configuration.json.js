Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NCULT] 14 Atualizar a área da cultura no site institucional","publishDate":"19/09/2022 09:58:21","pages":[{"id":"ba147758-017c-48eb-bc6a-f99a8b70216d","name":"[NCULT] 14 Atualizar a área da cultura no site institucional","version":"1.0","author":"aline","image":"files\\diagrams\\NCULT]_14_Atualizar_a_area_da_cultura_no_site_institucional.png","isSubprocessPage":false,"elements":[{"id":"0d6bf206-747e-45b6-a197-d53a1baeac31","name":"[NCULT] 14 Atualizar a área da cultura no site institucional","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2457.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"495ebebb-87e5-4a35-936c-c1fa6abc7440","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":200.0,"y":115.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e7caaee0-20f4-47df-b356-f6f2d0d7744d","name":"Identificar necessidade de atualização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":284.0,"y":100.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b4ee2a5c-db8c-4703-ad08-e93115c962da","name":"Trata-se de atualização estrutural ou pontual?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":309.0,"y":228.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Pontual: mudanças em textos, imagens e links, incluindo publicação de documentos","elementType":"SequenceFlow","properties":[]},{"name":"Estrutural: acréscimos ou supressões de páginas ou menus","elementType":"SequenceFlow","properties":[]}]},{"id":"8ac8d59b-6112-4a5f-996e-9eff41b64327","name":"Discutir a reestruturação da área da cultura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1499.0,"y":216.500015}],"radius":0.0,"height":63.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c1a7b383-e609-4ca5-8725-f79b3a33e336","name":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1499.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional - [NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional","type":"url","pageRef":"fc3cbbdb-bb12-4fbc-a5cb-9ec6e1080ff6","processPageRef":"f0803878-c8f4-458d-a580-abb2c150ff3e"}]},{"id":"25ee04b0-e87c-4c17-b7fe-dfaebcb47b66","name":"Apresentar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1659.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"36f67299-f7e7-418e-91a4-fbaf7673701c","name":"Discutir a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1659.0,"y":644.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e63dbe68-c1c0-4f81-979a-49be95496cbf","name":"Aprovar ou sugerir ajustes na proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1839.0,"y":644.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a0873cd-ec62-442a-b453-53289913a505","name":"Foram sugeridos ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1864.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d87d6ba5-92e9-45d4-a653-49994c0d5da8","name":"Realizar ajustes na proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1998.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"71895d52-94a6-44e4-bd1c-02dd11b47b4b","name":"Enviar a proposta para aprovação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2161.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e0a5804-7440-4338-81c4-48d7c670458f","name":"Analisar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2264.0,"y":1355.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5e61c7c-d399-4a0e-ae43-f9a6c0b54f6c","name":"Aprovar ou sugerir ajustes na proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2423.0,"y":1355.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86343bbc-587e-4ae9-92bc-eddbeac7f715","name":"Foram sugeridos ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2448.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0a824a4b-1c3e-4c73-8e39-435a5c1172a3","name":"Realizar ajustes na proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2581.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cf1ddb7d-08c2-488c-8329-620dffc365c6","name":"Finalizar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2747.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"940408f8-3a34-4a94-8bc6-d2630e60ef1f","name":"Reunir imagens e documentos originais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2901.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e59d2df8-fe42-4120-ad08-74798bbc4c67","name":"Solicitar atualização do site institucional","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3056.0,"y":1013.5}],"radius":0.0,"height":65.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ecf2753a-0a98-4445-a032-547a0c42d9a2","name":"Foi possível anexar a pasta compactada no sistema?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3247.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"4ff6a7c4-5708-4aba-af81-d1de4fe5958b","name":"Enviar imagens e documentos originais por e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3391.5,"y":1013.5}],"radius":0.0,"height":65.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e96c5435-63c8-4935-b376-31d898971eb1","name":"[ASCOM] 08 Publicar conteúdo no site institucional","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":3402.0,"y":2322.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"841cdabc-ce69-4413-a0d6-f4d19b955835","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":3690.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"9e772a2b-aa8d-45a1-9d9d-f4f68525fc96","name":"Revisar as atualizações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3665.0,"y":1850.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"09e1fc83-e674-436f-ab1b-cdc7f68bf6a9","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":3791.0,"y":1860.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"577b62fe-a996-4c5a-a2ce-043fea6db6ec","name":"Ler os textos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3877.0,"y":1850.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff4f24a1-3ba2-44b6-ba50-a296e4733ebe","name":"Verificar as imagens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3877.0,"y":1934.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"11de27c2-94ba-4726-945a-fc96fee1e959","name":"Acessar os links","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3877.0,"y":2016.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4abefc25-6805-4b06-84ea-9e9a2f012608","name":"Checar os fluxos do mapa do site","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3877.0,"y":2100.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7cd4f790-1dd0-443d-88da-1dce5c6abdff","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":4011.0,"y":1860.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"7b503ece-05cb-4960-982d-c88e22f6859c","name":"Preparar e-mail com retorno sobre a avaliação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4107.0,"y":1847.0}],"radius":0.0,"height":66.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f88f1972-5689-40bf-b732-398891b225f1","name":"Há correções pendentes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":4268.0,"y":1860.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ba14ec8f-10ce-4210-8bca-e40a96875ec2","name":"Elaborar documento com o detalhamento das correções ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4243.0,"y":1964.0}],"radius":0.0,"height":66.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7098691-53f4-4b08-b73b-e64951c0a91a","name":"Revisar as atualizações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3665.0,"y":644.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c964f547-df2a-476f-a7b4-5f08ceb305f9","name":"Há correções pendentes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3815.0,"y":654.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ec8bfe22-4efe-4dce-bf1c-e58f52c1068f","name":"Listar correções pendentes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3938.0,"y":644.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7083afe7-2f48-4114-bae9-5ea49aa9cf6b","name":"Dar retorno à programadora visual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4090.0,"y":644.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82d84fb6-1128-4887-8346-a026ca5d27c5","name":"Revisar as atualizações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3864.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eed1a3be-792b-4d24-b933-5972f22604ca","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":4384.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"304f609b-9a28-4925-9ded-e085e7b899ff","name":"Há ajustes pendentes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":4487.0,"y":1025.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"29488407-b1e6-4150-8a38-15cfb6735e5e","name":"Descrever últimos ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4462.0,"y":1143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d56b6a3-5a77-4b8c-992b-c02cdc1e4065","name":"Realizar últimos ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4462.0,"y":2316.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"53ec2010-8dc6-4d36-91ab-1727440c8d5e","name":"Informar solução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4616.0,"y":2316.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"761aa433-d33a-411f-969f-ca12c076d733","name":"Aceitar solução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4616.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cb2dfcd0-f73c-4b3f-89e3-c9e7a780641d","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":4769.0,"y":1030.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6bede70e-51e2-4a90-aad1-3d3808fb7003","name":"Identificar a página e o local da atualização","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":284.0,"y":402.5}],"radius":0.0,"height":65.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"359d5fbb-fdb6-47d6-80ff-e60f23db6d07","name":"Inclui criação ou mudança de imagens?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":441.0,"y":414.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c56bf153-2b01-40cc-9ca4-95a110580496","name":"Listar as imagens necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":416.0,"y":531.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"305fca76-75cd-4bb7-8c35-bd78893c3ac8","name":"Entre as imagens, há fotografias?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":441.0,"y":638.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"babb7cf8-6392-4d17-842f-9adcac4ace5d","name":"Selecionar fotografias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":416.0,"y":754.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74b2de4f-5395-409e-8e21-19efdf98c190","name":"Criar imagens adequadas ao formato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":516.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d3b2b413-c80f-40bd-827a-6f353d486cc1","name":"Disponibilizar imagens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":656.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"000636f7-6bec-4319-b426-7ebc263bc04d","name":"Reunir conteúdo para edição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":656.0,"y":404.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2901f22b-5551-488e-b001-d3071086cee4","name":"Há pessoa do NCULT com acesso de editor do site disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":986.0,"y":414.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9f9924f0-f9a6-4e42-8077-04a237090f22","name":"Informar a chefia imediata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":961.0,"y":531.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"699bbc78-d4e9-4569-ba2c-02b557d1532e","name":"Solicitar permissão de acesso de editor do site","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":961.0,"y":1356.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"05241b35-afe7-4def-933f-82ebf1cb8ef3","name":"Conceder acesso de editor do site","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":961.0,"y":2322.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"474ac9ec-842f-47eb-89ac-d8628cb336d4","name":"Realizar as edições na área da cultura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1137.0,"y":1574.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d681663-02b6-43a4-9edb-50dfe4770b1d","name":"Revisar as atualizações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1245.0,"y":404.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"07708dd9-6845-40b3-ac14-f8b9e8992494","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1397.0,"y":419.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cd2ab1e0-eaca-442f-b998-a9a4c6316d71","name":"NCULT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":858.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e3e842f0-fccd-4083-b795-3aafbff5bdc2","name":"Programadora visual","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":878.0}],"radius":0.0,"height":431.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"cdfe9c3a-202d-437f-9772-5d57b71310ee","name":"PROEXT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1309.0}],"radius":0.0,"height":219.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"82885541-fad1-4463-bc5b-84f785feb2bf","name":"Editor do site","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1528.0}],"radius":0.0,"height":239.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a61a02ee-da73-40bb-992b-ac8236cee25f","name":"Estagiário","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1767.0}],"radius":0.0,"height":510.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d7758948-0422-4b7e-b310-2508620746b9","name":"ASCOM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2277.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"fc3cbbdb-bb12-4fbc-a5cb-9ec6e1080ff6","name":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional","version":"1.0","author":"aline","image":"files\\diagrams\\NCULT]_14_01_Elaborar_proposta_de_reestruturacao_da_area_da_cultura_no_site_institucional.png","isSubprocessPage":false,"elements":[{"id":"f0803878-c8f4-458d-a580-abb2c150ff3e","name":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":436.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"9be1c968-239c-4831-b2d1-1b41b1a19b3b","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":150.0,"y":219.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"92f7e384-60f4-4507-b6cd-554a278531c1","name":"Analisar a estrutura e o conteúdo atuais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":222.0,"y":202.500015}],"radius":0.0,"height":63.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f08d06b0-6c48-4ad0-92d3-2c223769e66a","name":"Reunir as ideias levantadas pela equipe","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":352.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b9f9efe-1caa-4a75-ac02-3e1fa0d896ab","name":"Elaborar novo mapa do site para a área da cultura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":204.5}],"radius":0.0,"height":61.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e172896e-1549-470b-a139-8c7a2127c197","name":"Criar documento conforme novo mapa do site","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":616.0,"y":203.000015}],"radius":0.0,"height":62.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a67808a0-c016-445e-8e08-b41ab192f1b3","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":748.0,"y":214.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"7e57cc23-9bd6-4786-94a5-d9248b50c9b1","name":"Indicar links de páginas que serão alteradas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":864.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"605f55c1-4de9-4c0a-b143-9bc5025eec82","name":"Copiar conteúdo existente para o documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1001.0,"y":203.5}],"radius":0.0,"height":63.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e2e20be4-6fe8-4596-a5d7-430bd1d81d64","name":"Indicar as alterações no conteúdo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1132.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72b7af7a-26eb-4408-a33c-843f6b219bf1","name":"Indicar páginas que serão criadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":864.0,"y":303.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"228bfbb5-942d-4605-9212-9c093fc26d6c","name":"Elaborar a estrutura do conteúdo da página","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1001.0,"y":301.0}],"radius":0.0,"height":64.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"45eb5961-2ba2-44ec-99f3-2db558527e1e","name":"Redigir os novos textos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1264.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"03b66ba1-e39d-4253-aac3-ca9195cc12b5","name":"Indicar os links","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1396.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"09cfb590-75eb-4936-bbc5-8a4a830fa644","name":"Criar as novas imagens","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1525.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"69cbe60f-4f61-4f6d-9858-bc2805d67a5f","name":"Sugerir formatação conforme outras áreas do site","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1654.0,"y":201.5}],"radius":0.0,"height":67.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3de3889a-20ff-4fae-b449-aa9b0aa6fa98","name":"Indicar links de páginas que serão excluídas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":864.0,"y":106.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cb9cc8ee-c6a7-4472-8b4e-2190e018308e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1788.0,"y":214.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f4b87819-c875-4880-bf21-d4e7de6be589","name":"Revisar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1866.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fb71be18-18bd-4978-ac6f-af2b17378515","name":"Realizar ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2001.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a0c7b530-ae49-48a7-9a76-c457c9829213","name":"Finalizar a proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2131.0,"y":204.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06ce1d0c-b452-49c4-8974-7dede53ef500","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2264.0,"y":219.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"28d73c3d-e7f7-4c72-9db4-f315d51b0b6f","name":"Programadora visual","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":436.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"ba147758-017c-48eb-bc6a-f99a8b70216d","containerName":"[NCULT] 14 Atualizar a área da cultura no site institucional","isSubprocess":false,"elements":[{"id":"0d6bf206-747e-45b6-a197-d53a1baeac31","value":"[NCULT] 14 Atualizar a área da cultura no site institucional"},{"id":"cd2ab1e0-eaca-442f-b998-a9a4c6316d71","value":"NCULT"},{"id":"e3e842f0-fccd-4083-b795-3aafbff5bdc2","value":"Programadora visual"},{"id":"cdfe9c3a-202d-437f-9772-5d57b71310ee","value":"PROEXT"},{"id":"82885541-fad1-4463-bc5b-84f785feb2bf","value":"Editor do site"},{"id":"a61a02ee-da73-40bb-992b-ac8236cee25f","value":"Estagiário"},{"id":"d7758948-0422-4b7e-b310-2508620746b9","value":"ASCOM"},{"id":"495ebebb-87e5-4a35-936c-c1fa6abc7440","value":""},{"id":"e7caaee0-20f4-47df-b356-f6f2d0d7744d","value":"Identificar necessidade de atualização"},{"id":"b4ee2a5c-db8c-4703-ad08-e93115c962da","value":"Trata-se de atualização estrutural ou pontual?"},{"id":"6bede70e-51e2-4a90-aad1-3d3808fb7003","value":"Identificar a página e o local da atualização"},{"id":"000636f7-6bec-4319-b426-7ebc263bc04d","value":"Reunir conteúdo para edição"},{"id":"359d5fbb-fdb6-47d6-80ff-e60f23db6d07","value":"Inclui criação ou mudança de imagens?"},{"id":"c56bf153-2b01-40cc-9ca4-95a110580496","value":"Listar as imagens necessárias"},{"id":"74b2de4f-5395-409e-8e21-19efdf98c190","value":"Criar imagens adequadas ao formato"},{"id":"1d681663-02b6-43a4-9edb-50dfe4770b1d","value":"Revisar as atualizações"},{"id":"07708dd9-6845-40b3-ac14-f8b9e8992494","value":""},{"id":"c1a7b383-e609-4ca5-8725-f79b3a33e336","value":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional"},{"id":"8ac8d59b-6112-4a5f-996e-9eff41b64327","value":"Discutir a reestruturação da área da cultura"},{"id":"36f67299-f7e7-418e-91a4-fbaf7673701c","value":"Discutir a proposta"},{"id":"25ee04b0-e87c-4c17-b7fe-dfaebcb47b66","value":"Apresentar a proposta"},{"id":"7e0a5804-7440-4338-81c4-48d7c670458f","value":"Analisar a proposta"},{"id":"e59d2df8-fe42-4120-ad08-74798bbc4c67","value":"Solicitar atualização do site institucional"},{"id":"e96c5435-63c8-4935-b376-31d898971eb1","value":"[ASCOM] 08 Publicar conteúdo no site institucional"},{"id":"4ff6a7c4-5708-4aba-af81-d1de4fe5958b","value":"Enviar imagens e documentos originais por e-mail"},{"id":"9e772a2b-aa8d-45a1-9d9d-f4f68525fc96","value":"Revisar as atualizações"},{"id":"82d84fb6-1128-4887-8346-a026ca5d27c5","value":"Revisar as atualizações"},{"id":"841cdabc-ce69-4413-a0d6-f4d19b955835","value":""},{"id":"eed1a3be-792b-4d24-b933-5972f22604ca","value":""},{"id":"29488407-b1e6-4150-8a38-15cfb6735e5e","value":"Descrever últimos ajustes"},{"id":"304f609b-9a28-4925-9ded-e085e7b899ff","value":"Há ajustes pendentes?"},{"id":"e7098691-53f4-4b08-b73b-e64951c0a91a","value":"Revisar as atualizações"},{"id":"ec8bfe22-4efe-4dce-bf1c-e58f52c1068f","value":"Listar correções pendentes"},{"id":"d3b2b413-c80f-40bd-827a-6f353d486cc1","value":"Disponibilizar imagens"},{"id":"2901f22b-5551-488e-b001-d3071086cee4","value":"Há pessoa do NCULT com acesso de editor do site disponível?"},{"id":"9f9924f0-f9a6-4e42-8077-04a237090f22","value":"Informar a chefia imediata"},{"id":"699bbc78-d4e9-4569-ba2c-02b557d1532e","value":"Solicitar permissão de acesso de editor do site"},{"id":"05241b35-afe7-4def-933f-82ebf1cb8ef3","value":"Conceder acesso de editor do site"},{"id":"474ac9ec-842f-47eb-89ac-d8628cb336d4","value":"Realizar as edições na área da cultura"},{"id":"babb7cf8-6392-4d17-842f-9adcac4ace5d","value":"Selecionar fotografias"},{"id":"71895d52-94a6-44e4-bd1c-02dd11b47b4b","value":"Enviar a proposta para aprovação"},{"id":"761aa433-d33a-411f-969f-ca12c076d733","value":"Aceitar solução"},{"id":"cb2dfcd0-f73c-4b3f-89e3-c9e7a780641d","value":""},{"id":"8d56b6a3-5a77-4b8c-992b-c02cdc1e4065","value":"Realizar últimos ajustes"},{"id":"53ec2010-8dc6-4d36-91ab-1727440c8d5e","value":"Informar solução"},{"id":"940408f8-3a34-4a94-8bc6-d2630e60ef1f","value":"Reunir imagens e documentos originais"},{"id":"cf1ddb7d-08c2-488c-8329-620dffc365c6","value":"Finalizar a proposta"},{"id":"e63dbe68-c1c0-4f81-979a-49be95496cbf","value":"Aprovar ou sugerir ajustes na proposta"},{"id":"305fca76-75cd-4bb7-8c35-bd78893c3ac8","value":"Entre as imagens, há fotografias?"},{"id":"0a0873cd-ec62-442a-b453-53289913a505","value":"Foram sugeridos ajustes?"},{"id":"d87d6ba5-92e9-45d4-a653-49994c0d5da8","value":"Realizar ajustes na proposta"},{"id":"d5e61c7c-d399-4a0e-ae43-f9a6c0b54f6c","value":"Aprovar ou sugerir ajustes na proposta"},{"id":"86343bbc-587e-4ae9-92bc-eddbeac7f715","value":"Foram sugeridos ajustes?"},{"id":"0a824a4b-1c3e-4c73-8e39-435a5c1172a3","value":"Realizar ajustes na proposta"},{"id":"ecf2753a-0a98-4445-a032-547a0c42d9a2","value":"Foi possível anexar a pasta compactada no sistema?"},{"id":"577b62fe-a996-4c5a-a2ce-043fea6db6ec","value":"Ler os textos"},{"id":"ff4f24a1-3ba2-44b6-ba50-a296e4733ebe","value":"Verificar as imagens"},{"id":"11de27c2-94ba-4726-945a-fc96fee1e959","value":"Acessar os links"},{"id":"4abefc25-6805-4b06-84ea-9e9a2f012608","value":"Checar os fluxos do mapa do site"},{"id":"09e1fc83-e674-436f-ab1b-cdc7f68bf6a9","value":""},{"id":"7cd4f790-1dd0-443d-88da-1dce5c6abdff","value":""},{"id":"7b503ece-05cb-4960-982d-c88e22f6859c","value":"Preparar e-mail com retorno sobre a avaliação"},{"id":"f88f1972-5689-40bf-b732-398891b225f1","value":"Há correções pendentes?"},{"id":"ba14ec8f-10ce-4210-8bca-e40a96875ec2","value":"Elaborar documento com o detalhamento das correções "},{"id":"c964f547-df2a-476f-a7b4-5f08ceb305f9","value":"Há correções pendentes?"},{"id":"7083afe7-2f48-4114-bae9-5ea49aa9cf6b","value":"Dar retorno à programadora visual"},{"id":"ca63c958-8683-4dbe-8e63-f990f0a76c9f"},{"id":"d61cec21-b233-481e-a3c8-63bece4aee27"},{"id":"9b145b8b-12f9-4858-843f-f0513e021930"},{"id":"a7740aa6-f64b-4709-b0a0-624a42e848ef"},{"id":"7e91801c-a23f-4221-91eb-f02e975facff"},{"id":"21b5c609-6923-4e15-ad6e-deb4b81601c6"},{"id":"8182a147-ced5-4bc2-b5c5-c288ad7a83be"},{"id":"134b4ead-3ed7-4789-a455-5bb25faadb21"},{"id":"0c9e0629-b5b9-44ab-95a5-ba47437d6735"},{"id":"b423b297-7716-408d-9581-eb57d5b745e7"},{"id":"128f8414-78bf-4d3c-baab-0d4a6880b6db"},{"id":"d9f7c8f1-101b-490b-9d45-5a4a3015e3e8"},{"id":"91bef341-e3fa-44e0-a33a-3a119ccdd95f"},{"id":"4b0081ab-bd16-41d8-88f8-b3d9cbfd3fa5"},{"id":"781a46ac-92ce-4e25-b519-57b400a554a0"},{"id":"b4a957cc-03d6-455c-ab8a-b2421116295a"},{"id":"250c0d80-aa76-466c-84e5-db5a0ece4e92"},{"id":"4cc90f84-32a4-4b0c-8e2a-90512d3fa3df"},{"id":"261b5bd5-f0ab-4b6d-94e0-8206174efca0"},{"id":"3f0eba0e-3a00-4ad1-9a5e-028a3f36f22f"},{"id":"0f6ec453-848b-4883-9a54-248a97565a8b"},{"id":"4b0c900a-ca95-4046-92a0-d876e9782351"},{"id":"ff91bf59-1340-4df5-91b9-bcec8998f26d"},{"id":"82213711-dc9a-493c-b96c-d53f86276d24"},{"id":"d540844c-6520-4d6b-aab4-5257a5fbb464"},{"id":"fa2bc462-dbc2-4cee-981b-4b8454af380a"},{"id":"6dd68b34-afa9-440f-97ea-e3d07e8e0c84"},{"id":"ff940f2a-d5f9-453c-bf95-d6d2fecc60d3"},{"id":"7ddcd915-03a1-4751-ab02-bfab34fa1aad"},{"id":"737ab7d1-abd8-4571-80d2-50e5136ce706"},{"id":"ef94e817-6253-46c8-a333-be264aebee16"},{"id":"7ba7b7b4-d568-43be-b8e2-e53018b91a6b"}]},{"containerId":"fc3cbbdb-bb12-4fbc-a5cb-9ec6e1080ff6","containerName":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional","isSubprocess":false,"elements":[{"id":"f0803878-c8f4-458d-a580-abb2c150ff3e","value":"[NCULT] 14-01 Elaborar proposta de reestruturação da área da cultura no site institucional"},{"id":"28d73c3d-e7f7-4c72-9db4-f315d51b0b6f","value":"Programadora visual"},{"id":"e172896e-1549-470b-a139-8c7a2127c197","value":"Criar documento conforme novo mapa do site"},{"id":"cb9cc8ee-c6a7-4472-8b4e-2190e018308e","value":""},{"id":"a67808a0-c016-445e-8e08-b41ab192f1b3","value":""},{"id":"9be1c968-239c-4831-b2d1-1b41b1a19b3b","value":""},{"id":"09cfb590-75eb-4936-bbc5-8a4a830fa644","value":"Criar as novas imagens"},{"id":"69cbe60f-4f61-4f6d-9858-bc2805d67a5f","value":"Sugerir formatação conforme outras áreas do site"},{"id":"f4b87819-c875-4880-bf21-d4e7de6be589","value":"Revisar a proposta"},{"id":"fb71be18-18bd-4978-ac6f-af2b17378515","value":"Realizar ajustes"},{"id":"e2e20be4-6fe8-4596-a5d7-430bd1d81d64","value":"Indicar as alterações no conteúdo"},{"id":"a0c7b530-ae49-48a7-9a76-c457c9829213","value":"Finalizar a proposta"},{"id":"03b66ba1-e39d-4253-aac3-ca9195cc12b5","value":"Indicar os links"},{"id":"45eb5961-2ba2-44ec-99f3-2db558527e1e","value":"Redigir os novos textos"},{"id":"5b9f9efe-1caa-4a75-ac02-3e1fa0d896ab","value":"Elaborar novo mapa do site para a área da cultura"},{"id":"92f7e384-60f4-4507-b6cd-554a278531c1","value":"Analisar a estrutura e o conteúdo atuais"},{"id":"228bfbb5-942d-4605-9212-9c093fc26d6c","value":"Elaborar a estrutura do conteúdo da página"},{"id":"f08d06b0-6c48-4ad0-92d3-2c223769e66a","value":"Reunir as ideias levantadas pela equipe"},{"id":"3de3889a-20ff-4fae-b449-aa9b0aa6fa98","value":"Indicar links de páginas que serão excluídas"},{"id":"605f55c1-4de9-4c0a-b143-9bc5025eec82","value":"Copiar conteúdo existente para o documento"},{"id":"7e57cc23-9bd6-4786-94a5-d9248b50c9b1","value":"Indicar links de páginas que serão alteradas"},{"id":"72b7af7a-26eb-4408-a33c-843f6b219bf1","value":"Indicar páginas que serão criadas"},{"id":"06ce1d0c-b452-49c4-8974-7dede53ef500","value":""},{"id":"5887a1aa-ad23-44eb-8ae6-f27316ccee2a"},{"id":"83538962-2110-46b3-8fc2-afe4f6757c13"}]}]}