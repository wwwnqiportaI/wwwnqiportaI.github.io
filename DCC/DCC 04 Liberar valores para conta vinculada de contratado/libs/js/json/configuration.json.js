Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DCC] 04 Liberar valores para conta vinculada de contratado","publishDate":"07/03/2021 18:56:53","pages":[{"id":"e9a31818-23d9-417b-9d3d-f10fff8fa342","name":"[DCC] 04 Liberar valores para conta vinculada de contratado","version":"1.0","author":"tomash","image":"files\\diagrams\\DCC]_04_Liberar_valores_para_conta_vinculada_de_contratado.png","isSubprocessPage":false,"elements":[{"id":"981c6a1e-cbf9-41ec-ae7d-9c74b816759f","name":"[DCC] 04 Liberar valores para conta vinculada de contratado","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1028.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7d469b05-1209-48b6-a77f-7239c7ff379a","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":143.0,"y":127.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f61c2e89-e7d0-45e0-afd8-1fb5890e2e5a","name":"Enviar ofício e documentação  relativa à solicitação de liberação de valores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":261.0,"y":101.0}],"radius":0.0,"height":83.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6801e5ab-8ea1-4732-811a-34d92c51f1f0","name":"Analisar documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":268.0,"y":312.0}],"radius":0.0,"height":60.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"12e41f83-f541-44d2-9a92-a9970670a4ba","name":"Documentação correta?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":472.0,"y":322.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"f9921244-07cf-4834-a2bd-b73562de9ef1","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":449.0,"y":107.0}],"radius":0.0,"height":70.0,"width":86.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2d77db45-32ef-47ab-8a1c-d31991a90215","name":"Abrir processo de liberação de valores para conta vinculada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":591.0,"y":306.0}],"radius":0.0,"height":72.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e4becbb-05ff-4c6e-b873-672ae1fa34c0","name":"Incluir em PDF documentos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":722.0,"y":305.0}],"radius":0.0,"height":75.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d8663b98-3637-4029-96cc-123be91451ee","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":729.0,"y":417.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"334eec47-2f1a-4412-9206-cef29565767b","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":759.0,"y":582.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"4412420b-cdb8-4ba1-aba2-b0232902e32a","name":"Enviar processo ao DCF","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":901.0,"y":357.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2c50208-9d50-4485-8112-1dd8a5baabee","name":"Enviar ofício ao Banco do Brasil","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1128.0,"y":716.0}],"radius":0.0,"height":72.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea4a9873-4525-411f-b375-348f66b38ed7","name":"Incluir em PDF comprovante de liberação dos valores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1131.0,"y":815.0}],"radius":0.0,"height":70.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1890f462-3ff8-4b13-9e28-845087d4f81e","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1136.0,"y":955.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b406c45d-cd46-4dcd-a881-7dbd6d28118e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1325.0,"y":970.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"edd725b1-8d80-4db9-944d-94b17049e2d9","name":"Contratada","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":196.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"232121ed-1daa-4b62-8b0a-a2938380a3f4","name":"Fiscal de Contrato","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":216.0}],"radius":0.0,"height":307.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"768cbda8-7be9-453e-aeda-24851e53fc83","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":523.0}],"radius":0.0,"height":136.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0c6591bb-dedc-4f2e-827a-ebe4bb7f986a","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":659.0}],"radius":0.0,"height":251.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"aed4bd8e-6f2d-4f29-a708-471245f9c652","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":910.0}],"radius":0.0,"height":138.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"e9a31818-23d9-417b-9d3d-f10fff8fa342","containerName":"[DCC] 04 Liberar valores para conta vinculada de contratado","isSubprocess":false,"elements":[{"id":"981c6a1e-cbf9-41ec-ae7d-9c74b816759f","value":"[DCC] 04 Liberar valores para conta vinculada de contratado"},{"id":"edd725b1-8d80-4db9-944d-94b17049e2d9","value":"Contratada"},{"id":"232121ed-1daa-4b62-8b0a-a2938380a3f4","value":"Fiscal de Contrato"},{"id":"768cbda8-7be9-453e-aeda-24851e53fc83","value":"PROAD"},{"id":"0c6591bb-dedc-4f2e-827a-ebe4bb7f986a","value":"DCF"},{"id":"aed4bd8e-6f2d-4f29-a708-471245f9c652","value":"DIARQ"},{"id":"f61c2e89-e7d0-45e0-afd8-1fb5890e2e5a","value":"Enviar ofício e documentação  relativa à solicitação de liberação de valores"},{"id":"6801e5ab-8ea1-4732-811a-34d92c51f1f0","value":"Analisar documentação"},{"id":"12e41f83-f541-44d2-9a92-a9970670a4ba","value":"Documentação correta?"},{"id":"f9921244-07cf-4834-a2bd-b73562de9ef1","value":"Fazer correções necessárias"},{"id":"d8663b98-3637-4029-96cc-123be91451ee","value":"Incluir documento 011 - Ofício"},{"id":"334eec47-2f1a-4412-9206-cef29565767b","value":"Assinar documento em bloco"},{"id":"4412420b-cdb8-4ba1-aba2-b0232902e32a","value":"Enviar processo ao DCF"},{"id":"b2c50208-9d50-4485-8112-1dd8a5baabee","value":"Enviar ofício ao Banco do Brasil"},{"id":"ea4a9873-4525-411f-b375-348f66b38ed7","value":"Incluir em PDF comprovante de liberação dos valores"},{"id":"1890f462-3ff8-4b13-9e28-845087d4f81e","value":"Realizar tratamento arquivístico"},{"id":"b406c45d-cd46-4dcd-a881-7dbd6d28118e","value":""},{"id":"2d77db45-32ef-47ab-8a1c-d31991a90215","value":"Abrir processo de liberação de valores para conta vinculada"},{"id":"7e4becbb-05ff-4c6e-b873-672ae1fa34c0","value":"Incluir em PDF documentos recebidos"},{"id":"7d469b05-1209-48b6-a77f-7239c7ff379a","value":""},{"id":"1b2fb2d3-538e-46dd-9c09-2d1c67182010"},{"id":"d4889b39-9930-445d-9c18-a4ae4f797bab"},{"id":"4efc63ff-5af0-45e2-8320-bc43f144702e"},{"id":"e74ced9f-bbb0-4642-a94e-5c741e52a257"},{"id":"537a7c13-5c3b-4d06-81d9-a6c0289e0f16"},{"id":"65899c8b-ccf9-46ba-912c-b26223399093"},{"id":"f2e7af48-8396-41d6-a73d-2089fd9c4f59"},{"id":"f9ea27e8-368b-4443-8909-fd67a04b05c8"}]}]}