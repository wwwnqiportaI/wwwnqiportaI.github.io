Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CADD] 05 Fornecer documento comprobatório de atuação no PID","publishDate":"05/02/2021 13:16:48","pages":[{"id":"b3bc05ec-3e31-4dcf-9976-0ce4e25b51b9","name":"[CADD] 05 Fornecer documento comprobatório de atuação no PID","version":"1.0","author":"Home","image":"files\\diagrams\\CADD]_05_Fornecer_documento_comprobatorio_de_atuacao_no_PID.png","isSubprocessPage":false,"elements":[{"id":"448605e4-7cf7-4435-b7f3-dbbf20e94377","name":"[CADD] 05 Fornecer documento comprobatório de atuação no PID","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1231.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e17e1465-52ed-4f94-84c5-d3b2903be439","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":133.0,"y":78.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b79303c6-1d9b-41eb-a200-3c897a26f586","name":"Abrir processo de solicitação de comprovante de atuação no PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":49.0}],"radius":0.0,"height":88.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ddb3b98c-12ac-40ae-aa9d-792475277b38","name":"Interessado","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":235.0,"y":182.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Docente","elementType":"SequenceFlow","properties":[]},{"name":"Discente","elementType":"SequenceFlow","properties":[]}]},{"id":"72927901-125b-4bc3-bb27-fc4771a61970","name":"Incluir documento 314 - Solicitação comprovante PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":390.0,"y":165.0}],"radius":0.0,"height":74.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"257a8eb8-1e11-4973-a983-85cec46fb84d","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":399.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"65f7a35f-c8ad-43ed-9903-36f1f7a4c183","name":"Incluir documento 315 - Solicitação comprovante de atuação no PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":190.0,"y":295.0}],"radius":0.0,"height":69.0,"width":133.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"41a70eec-886b-4171-b3f8-85817f0a5899","name":"Analisar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"90c0c969-d9d1-4980-a2b4-d14579843f64","name":"Solicitação procede?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":235.0,"y":637.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"aebd2613-ce3d-48d7-82a4-461c123fcf13","name":"Atuação anterior a 2020?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":235.0,"y":749.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7e7ce15c-d867-4f66-be0e-6672e605038a","name":"Buscar Documento Comprobatório já emitido em processo de seleção de bolsistas PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":398.0,"y":725.0}],"radius":0.0,"height":88.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f9e7b077-6c10-4e54-a336-862af455dbfd","name":"Incluir documento 146 - Certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":203.0,"y":848.0}],"radius":0.0,"height":73.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"50f0a65c-7c6b-4f2a-9b38-c4591a076817","name":"Enviar documento ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":414.0,"y":843.0}],"radius":0.0,"height":82.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f861c01-d4a3-4e3f-ace8-7f82876ed636","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":399.0,"y":620.0}],"radius":0.0,"height":75.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6186ada9-51b5-4b27-a066-c01309854426","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":570.0,"y":627.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c9682dd-aff1-452e-b261-b0d1b0eac5e3","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":1122.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e338cd9-96d9-4d84-8cd2-5df16d4b9b03","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":568.0,"y":1137.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"ab954e69-a81d-4bc0-8c86-8e8ac3017f92","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":361.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ddf58536-87a0-44fa-babd-28e15776998c","name":"CADD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":381.0}],"radius":0.0,"height":670.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6864062d-83d8-4cdc-8354-1b219c55f0d2","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1051.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"b3bc05ec-3e31-4dcf-9976-0ce4e25b51b9","containerName":"[CADD] 05 Fornecer documento comprobatório de atuação no PID","isSubprocess":false,"elements":[{"id":"448605e4-7cf7-4435-b7f3-dbbf20e94377","value":"[CADD] 05 Fornecer documento comprobatório de atuação no PID"},{"id":"ab954e69-a81d-4bc0-8c86-8e8ac3017f92","value":"Interessado"},{"id":"ddf58536-87a0-44fa-babd-28e15776998c","value":"CADD"},{"id":"6864062d-83d8-4cdc-8354-1b219c55f0d2","value":"DIARQ"},{"id":"e17e1465-52ed-4f94-84c5-d3b2903be439","value":""},{"id":"b79303c6-1d9b-41eb-a200-3c897a26f586","value":"Abrir processo de solicitação de comprovante de atuação no PID"},{"id":"aebd2613-ce3d-48d7-82a4-461c123fcf13","value":"Atuação anterior a 2020?"},{"id":"7e7ce15c-d867-4f66-be0e-6672e605038a","value":"Buscar Documento Comprobatório já emitido em processo de seleção de bolsistas PID"},{"id":"f9e7b077-6c10-4e54-a336-862af455dbfd","value":"Incluir documento 146 - Certificado"},{"id":"50f0a65c-7c6b-4f2a-9b38-c4591a076817","value":"Enviar documento ao interessado"},{"id":"7c9682dd-aff1-452e-b261-b0d1b0eac5e3","value":"Realizar tratamento arquivístico"},{"id":"7e338cd9-96d9-4d84-8cd2-5df16d4b9b03","value":""},{"id":"ddb3b98c-12ac-40ae-aa9d-792475277b38","value":"Interessado"},{"id":"72927901-125b-4bc3-bb27-fc4771a61970","value":"Incluir documento 314 - Solicitação comprovante PID"},{"id":"65f7a35f-c8ad-43ed-9903-36f1f7a4c183","value":"Incluir documento 315 - Solicitação comprovante de atuação no PID"},{"id":"257a8eb8-1e11-4973-a983-85cec46fb84d","value":"Liberar acesso externo para o interessado"},{"id":"41a70eec-886b-4171-b3f8-85817f0a5899","value":"Analisar solicitação"},{"id":"90c0c969-d9d1-4980-a2b4-d14579843f64","value":"Solicitação procede?"},{"id":"1f861c01-d4a3-4e3f-ace8-7f82876ed636","value":"Incluir documento 872 - Despacho simples"},{"id":"6186ada9-51b5-4b27-a066-c01309854426","value":"Comunicar interessado"},{"id":"f9ecd0d0-fa5d-4073-8198-bf19928b4695"},{"id":"4d84ab28-5808-415c-9c3a-2db0b637f5eb"},{"id":"e5e301be-fe63-4acd-9a09-86d65557568e"},{"id":"bc9302de-9bc6-42ef-9d88-477227c80f87"},{"id":"b9872cc9-8a40-499d-b075-22056205723c"},{"id":"304d667d-3b48-477b-b595-7037c8d04a1e"},{"id":"9a017111-639f-40b8-8ab0-6be72492ab9f"},{"id":"a507dfb7-57bf-4b79-833d-52cd50178bc1"},{"id":"d1e55ebd-2561-4919-9013-2df3dc435f6f"},{"id":"5783b9f3-256f-4ef4-a7dc-3b4a587aad9c"}]}]}