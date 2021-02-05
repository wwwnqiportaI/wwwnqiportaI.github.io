Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CCPNP] 06 Interpor recurso ou impedimento referente à processo seletivo-concurso público","publishDate":"05/02/2021 17:50:57","pages":[{"id":"9fda9faa-33d2-456f-862f-ec55906ac26f","name":"[CCPNP] 06 Interpor recurso ou impedimento referente à processo seletivo-concurso público","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\CCPNP]_06_Interpor_recurso_ou_impedimento_referente_a_processo_seletivo_concurso_publico.png","isSubprocessPage":false,"elements":[{"id":"73a4371a-78c5-4d88-a90a-04c3a7d56145","name":"[CCPNP] 06 Interpor recurso ou impedimento referente à processo seletivo-concurso público","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1591.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"550db8bb-77d8-47ed-a48a-e9531f126b46","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":132.0,"y":89.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"ea1a994b-1d33-4651-8b73-d2d40a9599a6","name":"Abrir processo interposição recurso/impugnação referente a processo seletivo/concurso público","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":204.0,"y":58.0}],"radius":0.0,"height":92.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c5dfa7f7-2dc9-44c0-8360-ccdbe01b112c","name":"Incluir documento 005 - Requerimento interposição de recurso ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.0,"y":67.0}],"radius":0.0,"height":74.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"271a0203-d584-486e-9b68-02074436c168","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":391.0,"y":199.0}],"radius":0.0,"height":60.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1855fd8c-db12-46b8-8a6e-c142fe9a2d7c","name":"Liberar acesso externo para o interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":392.0,"y":343.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe838809-ed8a-449b-9a41-373db4035bc1","name":"Enviar processo para a Comissão de Concurso correspondente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":382.0,"y":431.0}],"radius":0.0,"height":73.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4b6f9e61-aa70-429d-b83d-b0fdcc8a71d2","name":"Relacionar processo  com o respectivo processo de provimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":280.0,"y":1014.0}],"radius":0.0,"height":72.0,"width":127.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"14cc927f-cb5d-41ad-b340-6702bbd62e65","name":"Tipo de interposição?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":323.0,"y":1152.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Recurso","elementType":"SequenceFlow","properties":[]},{"name":"Impugnação","elementType":"SequenceFlow","properties":[]}]},{"id":"31af199d-f8ba-429e-bb1f-08b67b20ca41","name":"Analisar recurso interposto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":298.0,"y":1252.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d6649c0c-e5e6-4352-8349-b7bf5a251ee7","name":"Incluir documento 135 - Decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":288.0,"y":1366.0}],"radius":0.0,"height":76.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ee5d26d4-0ce1-460c-bcca-3c759a990829","name":"Necessita de complementação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":729.0,"y":748.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"f3127d44-a085-4aa2-aeb7-d62816e31097","name":"Incluir documento  872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":697.0,"y":843.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a04fdb59-ac6e-49b2-ac94-f149794c29dd","name":"Dar ciência na decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":966.0,"y":738.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"365738e4-37be-4626-a467-6babe7b9a9e7","name":"Recurso é procedente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":991.0,"y":1033.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"24d9070e-1f6c-4428-a303-88b7886fe943","name":"Atualizar documentação no processo de seleção ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":952.0,"y":1140.0}],"radius":0.0,"height":72.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ebeb2611-d63f-479d-be1e-5accc6fb8eca","name":"Analisar impugnação interposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":501.5,"y":1142.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"42f97705-fbef-48ad-bc72-58ab68a57120","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":491.0,"y":1011.0}],"radius":0.0,"height":76.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7b91be4e-219a-4cc8-a40b-8c418845d605","name":"Dar ciência na decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":501.0,"y":891.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"189788ba-2c39-4b43-b963-945a1962fa67","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":487.5,"y":758.0}],"radius":0.0,"height":75.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"02617924-ef3a-45cd-97f4-9f1bc0e61d73","name":"Impugnação procedente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":526.0,"y":657.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"f4689d0e-abdb-4070-968b-53c0aec7298b","name":"Realizar alterações no processo de Edital ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":802.0,"y":551.0}],"radius":0.0,"height":68.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bb32ff8b-fca3-42d8-9217-a77dbad56aed","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1274.0,"y":1509.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aa68c9a2-4020-4834-b4cd-852d1eafa241","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1419.0,"y":1524.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"7ec30e18-dcf3-4ef4-9c4f-9332b1c970aa","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":291.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"033409fb-8e75-407a-8145-9f491d4b8dfc","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":311.0}],"radius":0.0,"height":221.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a7009bb5-cf66-4bd9-abd8-2eafeaca8259","name":"PROGESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":532.0}],"radius":0.0,"height":452.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"41ab7287-3b40-4efa-adb2-5dafd4b48d5a","name":"Comissão de Concurso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":984.0}],"radius":0.0,"height":488.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4de78c46-38a5-4505-9bf9-dce6fe28b984","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1472.0}],"radius":0.0,"height":139.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"9fda9faa-33d2-456f-862f-ec55906ac26f","containerName":"[CCPNP] 06 Interpor recurso ou impedimento referente à processo seletivo-concurso público","isSubprocess":false,"elements":[{"id":"73a4371a-78c5-4d88-a90a-04c3a7d56145","value":"[CCPNP] 06 Interpor recurso ou impedimento referente à processo seletivo-concurso público"},{"id":"7ec30e18-dcf3-4ef4-9c4f-9332b1c970aa","value":"Interessado"},{"id":"033409fb-8e75-407a-8145-9f491d4b8dfc","value":"DIPROT"},{"id":"a7009bb5-cf66-4bd9-abd8-2eafeaca8259","value":"PROGESP"},{"id":"41ab7287-3b40-4efa-adb2-5dafd4b48d5a","value":"Comissão de Concurso"},{"id":"4de78c46-38a5-4505-9bf9-dce6fe28b984","value":"DIARQ"},{"id":"31af199d-f8ba-429e-bb1f-08b67b20ca41","value":"Analisar recurso interposto"},{"id":"24d9070e-1f6c-4428-a303-88b7886fe943","value":"Atualizar documentação no processo de seleção "},{"id":"aa68c9a2-4020-4834-b4cd-852d1eafa241","value":""},{"id":"c5dfa7f7-2dc9-44c0-8360-ccdbe01b112c","value":"Incluir documento 005 - Requerimento interposição de recurso "},{"id":"550db8bb-77d8-47ed-a48a-e9531f126b46","value":""},{"id":"d6649c0c-e5e6-4352-8349-b7bf5a251ee7","value":"Incluir documento 135 - Decisão administrativa"},{"id":"ea1a994b-1d33-4651-8b73-d2d40a9599a6","value":"Abrir processo interposição recurso/impugnação referente a processo seletivo/concurso público"},{"id":"bb32ff8b-fca3-42d8-9217-a77dbad56aed","value":"Realizar tratamento arquivístico"},{"id":"a04fdb59-ac6e-49b2-ac94-f149794c29dd","value":"Dar ciência na decisão administrativa"},{"id":"271a0203-d584-486e-9b68-02074436c168","value":"Incluir em PDF documentos comprobatórios"},{"id":"14cc927f-cb5d-41ad-b340-6702bbd62e65","value":"Tipo de interposição?"},{"id":"f4689d0e-abdb-4070-968b-53c0aec7298b","value":"Realizar alterações no processo de Edital "},{"id":"189788ba-2c39-4b43-b963-945a1962fa67","value":"Incluir documento 872 - Despacho simples"},{"id":"ee5d26d4-0ce1-460c-bcca-3c759a990829","value":"Necessita de complementação?"},{"id":"f3127d44-a085-4aa2-aeb7-d62816e31097","value":"Incluir documento  872 - Despacho simples"},{"id":"365738e4-37be-4626-a467-6babe7b9a9e7","value":"Recurso é procedente?"},{"id":"1855fd8c-db12-46b8-8a6e-c142fe9a2d7c","value":"Liberar acesso externo para o interessado"},{"id":"fe838809-ed8a-449b-9a41-373db4035bc1","value":"Enviar processo para a Comissão de Concurso correspondente"},{"id":"ebeb2611-d63f-479d-be1e-5accc6fb8eca","value":"Analisar impugnação interposta"},{"id":"42f97705-fbef-48ad-bc72-58ab68a57120","value":"Incluir documento 872 - Despacho simples"},{"id":"4b6f9e61-aa70-429d-b83d-b0fdcc8a71d2","value":"Relacionar processo  com o respectivo processo de provimento"},{"id":"7b91be4e-219a-4cc8-a40b-8c418845d605","value":"Dar ciência na decisão administrativa"},{"id":"02617924-ef3a-45cd-97f4-9f1bc0e61d73","value":"Impugnação procedente?"},{"id":"722bcc7e-2093-4be1-a575-df6f945bb4ac"},{"id":"cef6287e-f06d-40c7-8a98-cd01bec83e7a"},{"id":"87e7b691-e051-48e6-8efe-a9215e86c87f"},{"id":"48ec7532-e574-411a-b06c-289c73c7d315"}]}]}