Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[UFCSPA] 08 Devolver recursos recolhidos por GRU","publishDate":"07/03/2021 19:49:35","pages":[{"id":"6686ad4e-d84e-47a5-ab8f-04bbf42a3d92","name":"[UFCSPA] 08 Devolver recursos recolhidos por GRU","version":"1.0","author":"ariel","image":"files\\diagrams\\UFCSPA]_08_Devolver_recursos_recolhidos_por_GRU.png","isSubprocessPage":false,"elements":[{"id":"b0444ee1-85af-4a54-86ac-862a7b489e7e","name":"[UFCSPA] 08 Devolver recursos recolhidos por GRU","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1311.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e9a12216-f135-4824-b2fe-803d0b68394f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":163.0,"y":124.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"d442b070-00cc-49a2-bf87-bfd883b3ab24","name":"Abrir processo de solicitação de devolução de recursos recolhidos por GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":267.0,"y":99.5}],"radius":0.0,"height":81.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fadb4568-6933-4e84-bebc-a8c0c3abc782","name":"Incluir documento 327 - Solicitação de devolução de recursos GRU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":476.0,"y":101.0}],"radius":0.0,"height":76.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea279282-c19c-49c4-82c5-92f44e1295f1","name":"Incluir em PDF comprovante de pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":487.0,"y":232.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0efa2acd-da95-493d-8066-8346fcbac790","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":487.0,"y":426.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bc195dc8-fc96-449b-8f8e-4adaa1d8699f","name":"Enviar processo para a Pró-Reitoria competente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":281.0,"y":421.0}],"radius":0.0,"height":70.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2cff322b-9d13-4165-acf9-e49f4fc4b4b5","name":"Analisar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":288.0,"y":633.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2e686b25-7e49-4e7d-84d7-b4890a908cf0","name":"Incluir documento 135 - Decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":488.0,"y":627.0}],"radius":0.0,"height":72.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be1288f6-3b37-4956-be04-694074833d6e","name":"Comunicar ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":710.0,"y":633.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7bf1216-e948-4450-a6b7-828c15658425","name":"Solicitação deferida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":889.0,"y":643.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"4d141578-d8b4-4dcb-9555-f3306c2cca84","name":"Realizar a devolução do pagamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":864.0,"y":892.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4a2f917-5926-4d70-98ad-b950658174e3","name":"Incluir documento 990 - Informe de documentos gerados no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":855.5,"y":1014.0}],"radius":0.0,"height":81.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"686a3644-75e4-417a-91ed-fc0970406ce6","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":962.0,"y":1201.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"655ff965-91af-494a-b9f8-ed18cc31c889","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1094.0,"y":1216.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"220ab461-51d0-46dd-9b26-845c86236e85","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":350.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ea573574-89a3-4fed-9772-5be2bcbdc613","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":370.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9f0e52d4-fa65-4df2-9070-ba9f40f9097f","name":"Pró-reitoria competente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":570.0}],"radius":0.0,"height":259.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"af14ae2a-bd32-459d-b55d-1ce5fc1e72fe","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":829.0}],"radius":0.0,"height":302.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"919e75e5-bbd0-410b-ad7c-920b82860a41","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1131.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"6686ad4e-d84e-47a5-ab8f-04bbf42a3d92","containerName":"[UFCSPA] 08 Devolver recursos recolhidos por GRU","isSubprocess":false,"elements":[{"id":"b0444ee1-85af-4a54-86ac-862a7b489e7e","value":"[UFCSPA] 08 Devolver recursos recolhidos por GRU"},{"id":"220ab461-51d0-46dd-9b26-845c86236e85","value":"Interessado"},{"id":"ea573574-89a3-4fed-9772-5be2bcbdc613","value":"DIPROT"},{"id":"9f0e52d4-fa65-4df2-9070-ba9f40f9097f","value":"Pró-reitoria competente"},{"id":"af14ae2a-bd32-459d-b55d-1ce5fc1e72fe","value":"DCF"},{"id":"919e75e5-bbd0-410b-ad7c-920b82860a41","value":"DIARQ"},{"id":"e9a12216-f135-4824-b2fe-803d0b68394f","value":""},{"id":"d442b070-00cc-49a2-bf87-bfd883b3ab24","value":"Abrir processo de solicitação de devolução de recursos recolhidos por GRU"},{"id":"fadb4568-6933-4e84-bebc-a8c0c3abc782","value":"Incluir documento 327 - Solicitação de devolução de recursos GRU"},{"id":"ea279282-c19c-49c4-82c5-92f44e1295f1","value":"Incluir em PDF comprovante de pagamento"},{"id":"0efa2acd-da95-493d-8066-8346fcbac790","value":"Liberar acesso externo para o interessado"},{"id":"bc195dc8-fc96-449b-8f8e-4adaa1d8699f","value":"Enviar processo para a Pró-Reitoria competente"},{"id":"2cff322b-9d13-4165-acf9-e49f4fc4b4b5","value":"Analisar solicitação"},{"id":"2e686b25-7e49-4e7d-84d7-b4890a908cf0","value":"Incluir documento 135 - Decisão administrativa"},{"id":"be1288f6-3b37-4956-be04-694074833d6e","value":"Comunicar ao interessado"},{"id":"e7bf1216-e948-4450-a6b7-828c15658425","value":"Solicitação deferida?"},{"id":"686a3644-75e4-417a-91ed-fc0970406ce6","value":"Realizar tratamento arquivístico"},{"id":"655ff965-91af-494a-b9f8-ed18cc31c889","value":""},{"id":"c4a2f917-5926-4d70-98ad-b950658174e3","value":"Incluir documento 990 - Informe de documentos gerados no SIAFI"},{"id":"4d141578-d8b4-4dcb-9555-f3306c2cca84","value":"Realizar a devolução do pagamento"},{"id":"c89ef615-dde5-4acc-bc4c-66e67ec7c2ab"},{"id":"16ad5e13-a6da-4abd-a9e0-d8920ad5e0c8"},{"id":"2f115beb-f63a-4960-92d8-f8c595381450"},{"id":"d448e4fb-ec73-4b8b-97e4-35ebd922237c"}]}]}