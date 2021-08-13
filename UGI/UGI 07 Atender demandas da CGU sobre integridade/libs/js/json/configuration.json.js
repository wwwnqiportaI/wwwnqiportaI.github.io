Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[UGI] 07 Atender demandas da CGU sobre integridade","publishDate":"13/08/2021 11:11:09","pages":[{"id":"3489c50e-4f65-4cd1-99c1-39fa81f7f7af","name":"[UGI] 07 Atender demandas da CGU sobre integridade","version":"1.0","author":"miguel","image":"files\\diagrams\\UGI]_07_Atender_demandas_da_CGU_sobre_integridade.png","isSubprocessPage":false,"elements":[{"id":"4522891b-9fd9-42d7-9e61-a22a0c4213ff","name":"[UGI] 07 Atender demandas da CGU sobre integridade","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":763.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"cde6f8f6-1364-4c4a-b5c2-fec465faf06e","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":112.0,"y":129.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"d5bae758-0bec-4fbe-9bee-8fd466ad0eff","name":"Receber demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":167.0,"y":114.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0d88b3ec-20a9-4137-a7df-db75e859435b","name":"Analisar demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":274.0,"y":114.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"144f987b-c4f8-4201-9575-6435e2bbb4f3","name":"Comunicar demanda à Reitoria, para conhecimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":273.0,"y":241.0}],"radius":0.0,"height":68.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"49ee2242-587f-4358-9f48-e4389e0435fb","name":"UGI pode solucionar diretamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":441.0,"y":255.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e464cdb5-d460-40b5-8644-c7010f4e0c46","name":"Estabelecer contato para a solução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":416.0,"y":347.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"80f971fc-7a52-40f5-8623-7209b1b6e1f7","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":562.0,"y":345.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"d8de4595-8a64-45ca-b1d5-c4bc589003c4","name":"Atender a demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":537.0,"y":511.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"58882caf-9f38-486f-a7a6-37d5ec06206b","name":"Acompanhar a solução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":537.0,"y":112.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a4c1a3b6-d3c3-4219-8088-fe47832870e5","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":661.0,"y":243.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f567dcd5-d9cd-40ee-9764-e886a1bdf854","name":"Atender a demanda","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":416.0,"y":113.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1ddc076d-3f28-44b1-8832-e312f20354ef","name":"Registrar informações necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":751.0,"y":233.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b59968a1-1cc3-41d9-b22e-826f133a6e55","name":"Necessário enviar resposta à CGU?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":922.0,"y":105.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0156ff5d-3ba5-4e73-9f50-d4109da0f6cf","name":"Comunicação deve partir da Reitoria?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":922.0,"y":242.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"b64f1a0f-8e4f-48de-a053-97d451b223c2","name":"Propor minuta de resposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":897.0,"y":351.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3f4e06a-489b-4960-97d6-417773cd05ae","name":"Comunicar solução à CGU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1046.0,"y":687.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e2d46ee6-6458-49cc-a6eb-65f28e571e78","name":"Comunicar solução à CGU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1046.0,"y":232.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c297d723-a9ee-4304-b05b-8eda470f1aac","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1076.0,"y":110.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"49dfb834-bfa4-42ec-b735-7fe8188bdc79","name":"Unidade de Gestão da Integridade","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":445.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"40e2823d-cada-4c38-a8e7-40116e710b77","name":"Unidade responsável","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":465.0}],"radius":0.0,"height":164.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c5ef1c22-df2b-46cc-adfc-5879792e1a2f","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":629.0}],"radius":0.0,"height":154.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"3489c50e-4f65-4cd1-99c1-39fa81f7f7af","containerName":"[UGI] 07 Atender demandas da CGU sobre integridade","isSubprocess":false,"elements":[{"id":"4522891b-9fd9-42d7-9e61-a22a0c4213ff","value":"[UGI] 07 Atender demandas da CGU sobre integridade"},{"id":"49dfb834-bfa4-42ec-b735-7fe8188bdc79","value":"Unidade de Gestão da Integridade"},{"id":"40e2823d-cada-4c38-a8e7-40116e710b77","value":"Unidade responsável"},{"id":"c5ef1c22-df2b-46cc-adfc-5879792e1a2f","value":"Reitoria"},{"id":"cde6f8f6-1364-4c4a-b5c2-fec465faf06e","value":""},{"id":"d5bae758-0bec-4fbe-9bee-8fd466ad0eff","value":"Receber demanda"},{"id":"144f987b-c4f8-4201-9575-6435e2bbb4f3","value":"Comunicar demanda à Reitoria, para conhecimento"},{"id":"49ee2242-587f-4358-9f48-e4389e0435fb","value":"UGI pode solucionar diretamente?"},{"id":"e464cdb5-d460-40b5-8644-c7010f4e0c46","value":"Estabelecer contato para a solução"},{"id":"f567dcd5-d9cd-40ee-9764-e886a1bdf854","value":"Atender a demanda"},{"id":"80f971fc-7a52-40f5-8623-7209b1b6e1f7","value":""},{"id":"d8de4595-8a64-45ca-b1d5-c4bc589003c4","value":"Atender a demanda"},{"id":"a4c1a3b6-d3c3-4219-8088-fe47832870e5","value":""},{"id":"1ddc076d-3f28-44b1-8832-e312f20354ef","value":"Registrar informações necessárias"},{"id":"b59968a1-1cc3-41d9-b22e-826f133a6e55","value":"Necessário enviar resposta à CGU?"},{"id":"58882caf-9f38-486f-a7a6-37d5ec06206b","value":"Acompanhar a solução"},{"id":"c297d723-a9ee-4304-b05b-8eda470f1aac","value":""},{"id":"0156ff5d-3ba5-4e73-9f50-d4109da0f6cf","value":"Comunicação deve partir da Reitoria?"},{"id":"e2d46ee6-6458-49cc-a6eb-65f28e571e78","value":"Comunicar solução à CGU"},{"id":"b64f1a0f-8e4f-48de-a053-97d451b223c2","value":"Propor minuta de resposta"},{"id":"c3f4e06a-489b-4960-97d6-417773cd05ae","value":"Comunicar solução à CGU"},{"id":"0d88b3ec-20a9-4137-a7df-db75e859435b","value":"Analisar demanda"},{"id":"c35fae23-f920-499c-9d61-869089d37cf3"},{"id":"d8742dd3-95ca-4fd4-9603-698552aef07d"},{"id":"5d7f2bae-161c-47d5-8cb2-31af347096a6"},{"id":"72c6cd85-7718-4224-bb2c-da6f9bb877fe"},{"id":"62b05169-1ba1-43f5-9b33-e2b6ef8602fe"},{"id":"2e48a329-b183-445c-be68-d307d7c10964"},{"id":"f3dd2b21-9383-4667-9fb4-d5477a9ccf1c"},{"id":"8a84749e-48c3-4a94-91b3-6c1dddc3531e"},{"id":"e194ce43-c88e-462e-92c0-b92cf48d5e39"},{"id":"8a73bbb0-2dd9-4bc4-b68d-6f2025037779"},{"id":"fcd2e7af-2f81-4998-8a1e-1a71f55619b5"},{"id":"19a1dca3-d5e3-4bdc-b1eb-1e0e020927bd"}]}]}