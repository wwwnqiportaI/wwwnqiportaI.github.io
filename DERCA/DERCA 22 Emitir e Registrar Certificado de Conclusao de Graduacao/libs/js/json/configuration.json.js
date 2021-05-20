Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 22 Emitir e registrar certificado de conclusão de graduação","publishDate":"20/05/2021 17:36:01","pages":[{"id":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","name":"[DERCA] 22 Emitir e registrar certificado de conclusão de graduação","version":"1.0","author":"rene","image":"files\\diagrams\\DERCA]_22_Emitir_e_registrar_certificado_de_conclusao_de_graduacao.png","isSubprocessPage":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","name":"[DERCA] 22 Emitir e registrar certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1301.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"a8e366f9-cdff-43fa-ae7f-6f552bce6b9f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":169.0,"y":85.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"d1a9e9a5-ffc2-49fe-aac6-3f801ab2ac61","name":"Enviar processo para a DISEC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":294.5,"y":70.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f23d7da4-a26c-4f29-9e61-1c4e20e3cd86","name":"Colher informações para confecção do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":258.0,"y":276.0}],"radius":0.0,"height":60.0,"width":163.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"79d7264f-e6e7-40a4-8aed-f1e64fb4ac85","name":"Será necessário solicitar documentos da Divisão de Arquivo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.5,"y":454.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1b2131a8-153f-443e-80fa-0151bfd5c4c6","name":"[DIARQ] 02 Emprestar documentos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":463.0,"y":444.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2002%20Emprestar%20documentos/#list","type":"url"}},{"id":"53e50133-c4e3-4feb-8eec-bacaebe1c7c5","name":"Verificar informações colhidas para confecção do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":252.0,"y":561.0}],"radius":0.0,"height":60.0,"width":175.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1ee35882-1419-4217-8816-ba0b1e8658da","name":"Informações conferem com os dados do interessado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.0,"y":720.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"92588309-a54e-4554-8eed-2b062ce869b0","name":"Corrigir informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":294.0,"y":840.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ce0edbc-aa5b-4f15-8822-d5f112535e58","name":"Necessário entrar em contato com o interessado para corrigir informações?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":319.0,"y":949.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e431a843-2c8f-4274-9a7b-6ef0bf09cb5c","name":"Entrar em contato com o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":140.0,"y":939.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9c88cfea-b9a3-424b-8070-fe381d9036f9","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":476.0,"y":949.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Problema resolvidos?","elementType":"SequenceFlow","properties":[]}]},{"id":"e71f53a0-2936-42a7-96a5-29afdcb9c6a6","name":"Problema resolvidos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":612.0,"y":949.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"246d5cf8-8cfc-4e06-99ee-95ea98f40852","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":849.0,"y":932.0}],"radius":0.0,"height":74.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba5cfc53-a2fc-4ef0-8c9c-d85e482a8959","name":"Incluir documento 146 - Certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":568.0,"y":710.0}],"radius":0.0,"height":60.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ba9fea1-795d-4cf6-936a-cba4a10bd6f4","name":"Registrar emissão do certificado de conclusão de graduação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":991.5,"y":710.0}],"radius":0.0,"height":60.0,"width":167.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5db68296-c6c1-427d-b16f-154f8010b25f","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1030.0,"y":939.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f1b3f6cc-1088-46d3-b267-55a59897ce4b","name":"Enviar processo para a Divisão de Arquivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1212.0,"y":930.0}],"radius":0.0,"height":78.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"38e5b7cd-9078-4fca-a749-4bdcbba54311","name":"[DIARQ] 01Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1213.5,"y":1207.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"c10ed6af-200e-405a-a297-6af38a6c09ac","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1374.0,"y":1222.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"58ba636c-1790-4c4d-9ef6-229c502181fe","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":154.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c8bf10ce-2a54-4964-99ef-3ba6f4b37e34","name":"DIRD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":174.0}],"radius":0.0,"height":986.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c33b8fb2-8a10-4b8d-94de-85881aab7c55","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1160.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8a4c0eea-1cdb-470b-936f-0b0d9f3e6386","containerName":"[DERCA] 22 Emitir e registrar certificado de conclusão de graduação","isSubprocess":false,"elements":[{"id":"01489ed8-34c3-4faa-807f-bab0b367f8d5","value":"[DERCA] 22 Emitir e registrar certificado de conclusão de graduação"},{"id":"58ba636c-1790-4c4d-9ef6-229c502181fe","value":"DIPROT"},{"id":"c8bf10ce-2a54-4964-99ef-3ba6f4b37e34","value":"DIRD"},{"id":"c33b8fb2-8a10-4b8d-94de-85881aab7c55","value":"DIARQ"},{"id":"f23d7da4-a26c-4f29-9e61-1c4e20e3cd86","value":"Colher informações para confecção do certificado de conclusão de graduação"},{"id":"1ee35882-1419-4217-8816-ba0b1e8658da","value":"Informações conferem com os dados do interessado?"},{"id":"ba5cfc53-a2fc-4ef0-8c9c-d85e482a8959","value":"Incluir documento 146 - Certificado"},{"id":"e71f53a0-2936-42a7-96a5-29afdcb9c6a6","value":"Problema resolvidos?"},{"id":"4ba9fea1-795d-4cf6-936a-cba4a10bd6f4","value":"Registrar emissão do certificado de conclusão de graduação"},{"id":"79d7264f-e6e7-40a4-8aed-f1e64fb4ac85","value":"Será necessário solicitar documentos da Divisão de Arquivo?"},{"id":"53e50133-c4e3-4feb-8eec-bacaebe1c7c5","value":"Verificar informações colhidas para confecção do certificado de conclusão de graduação"},{"id":"1b2131a8-153f-443e-80fa-0151bfd5c4c6","value":"[DIARQ] 02 Emprestar documentos"},{"id":"a8e366f9-cdff-43fa-ae7f-6f552bce6b9f","value":""},{"id":"d1a9e9a5-ffc2-49fe-aac6-3f801ab2ac61","value":"Enviar processo para a DISEC"},{"id":"246d5cf8-8cfc-4e06-99ee-95ea98f40852","value":"Incluir documento 872 - Despacho simples"},{"id":"5db68296-c6c1-427d-b16f-154f8010b25f","value":"Comunicar interessado"},{"id":"f1b3f6cc-1088-46d3-b267-55a59897ce4b","value":"Enviar processo para a Divisão de Arquivo"},{"id":"c10ed6af-200e-405a-a297-6af38a6c09ac","value":""},{"id":"e431a843-2c8f-4274-9a7b-6ef0bf09cb5c","value":"Entrar em contato com o interessado"},{"id":"92588309-a54e-4554-8eed-2b062ce869b0","value":"Corrigir informações"},{"id":"5ce0edbc-aa5b-4f15-8822-d5f112535e58","value":"Necessário entrar em contato com o interessado para corrigir informações?"},{"id":"9c88cfea-b9a3-424b-8070-fe381d9036f9","value":""},{"id":"38e5b7cd-9078-4fca-a749-4bdcbba54311","value":"[DIARQ] 01Realizar tratamento arquivístico"},{"id":"ad299d99-7e29-4c56-adca-52108f351b1e"},{"id":"eed52f27-6588-49c8-bf5c-89505c38449c"},{"id":"2aeda9ac-d2b5-49db-84f9-ecbd847a0e9e"},{"id":"333c082e-d1b3-4424-b83f-3b586541ebd1"},{"id":"bab238d0-6544-4cb5-a142-324ff2aa66d9"},{"id":"128202de-fa1c-470e-9edc-8c578a18af61"},{"id":"962ff777-6c9a-4e3a-9ac1-86784eb02a76"},{"id":"a6eee096-4d7d-4f59-8daf-93fec0609f3b"},{"id":"8b7bec29-13f8-46af-825e-6574b04a6457"},{"id":"d687a082-49f6-4b5f-974c-f1f4cb19bde9"},{"id":"4ae27904-90ba-4ee0-8af8-c4c51f5ce4a1"},{"id":"8330fc3a-68f7-4da0-96d9-aa9c61811c84"}]}]}