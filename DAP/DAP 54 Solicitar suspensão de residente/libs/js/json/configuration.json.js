Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 54 Solicitar suspensão de residente","publishDate":"03/08/2022 11:27:03","pages":[{"id":"1b809609-255c-42f9-b2ba-bd5e9ecf206b","name":"[DAP] 54 Solicitar suspensão de residente","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_54_Solicitar_suspensao_de_residente.png","isSubprocessPage":false,"elements":[{"id":"7aeccce2-ac0d-4a1b-9ca8-2ea1575d55a6","name":"[DAP] 54 Solicitar suspensão de residente","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":923.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"3a96fa6e-b14c-4440-a9de-6f11976396d3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":137.0,"y":54.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"06a465df-92e1-4335-a447-f362ec864a9c","name":"Abrir processo de suspensão de residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.0,"y":39.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8699bce4-46c0-4b0c-beef-4e1bb847ff7c","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.0,"y":151.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6be14717-688a-461f-8be5-feeca54a545d","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.5,"y":287.0}],"radius":0.0,"height":66.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b0174c4a-40e7-4403-8c93-b6efc1c64bf6","name":"Registrar no SIAPE a  suspensão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.0,"y":566.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ca6e4490-d950-4367-bfe6-9614aed9e8c7","name":"Aguardar retorno do residente","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":368.0,"y":431.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"e58256be-ae15-4c21-b7f6-7788a91b8396","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":450.0,"y":416.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9edea946-9e5c-4ed6-b26a-b66cedade1f0","name":"Registrar no SIAPE o retorno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":450.0,"y":564.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68fa88ef-c6b2-4570-a240-6d99c8f49ea5","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":444.5,"y":702.0}],"radius":0.0,"height":60.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b8b2e3dc-2c0b-4d63-9632-bb5b5dae7414","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":450.0,"y":826.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"82dfdd1e-a523-44e9-92f9-c3d709689682","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":607.0,"y":841.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"fda7812c-fccc-4071-8d11-33d4d2b6c389","name":"COREME OU COREMU","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":510.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"56c8a8b2-2bce-48a9-91a4-eea51e478b67","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":530.0}],"radius":0.0,"height":279.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6d322861-8f0f-41db-aee8-e947c84c73d7","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":809.0}],"radius":0.0,"height":134.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"1b809609-255c-42f9-b2ba-bd5e9ecf206b","containerName":"[DAP] 54 Solicitar suspensão de residente","isSubprocess":false,"elements":[{"id":"7aeccce2-ac0d-4a1b-9ca8-2ea1575d55a6","value":"[DAP] 54 Solicitar suspensão de residente"},{"id":"fda7812c-fccc-4071-8d11-33d4d2b6c389","value":"COREME OU COREMU"},{"id":"56c8a8b2-2bce-48a9-91a4-eea51e478b67","value":"DAP"},{"id":"6d322861-8f0f-41db-aee8-e947c84c73d7","value":"DIARQ"},{"id":"3a96fa6e-b14c-4440-a9de-6f11976396d3","value":""},{"id":"06a465df-92e1-4335-a447-f362ec864a9c","value":"Abrir processo de suspensão de residente"},{"id":"8699bce4-46c0-4b0c-beef-4e1bb847ff7c","value":"Incluir documento 011 - Ofício"},{"id":"b0174c4a-40e7-4403-8c93-b6efc1c64bf6","value":"Registrar no SIAPE a  suspensão"},{"id":"82dfdd1e-a523-44e9-92f9-c3d709689682","value":""},{"id":"6be14717-688a-461f-8be5-feeca54a545d","value":"Incluir em PDF documentos comprobatórios"},{"id":"e58256be-ae15-4c21-b7f6-7788a91b8396","value":"Incluir documento 011 - Ofício"},{"id":"9edea946-9e5c-4ed6-b26a-b66cedade1f0","value":"Registrar no SIAPE o retorno"},{"id":"ca6e4490-d950-4367-bfe6-9614aed9e8c7","value":"Aguardar retorno do residente"},{"id":"b8b2e3dc-2c0b-4d63-9632-bb5b5dae7414","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"68fa88ef-c6b2-4570-a240-6d99c8f49ea5","value":"Incluir documento 872 - Despacho simples"},{"id":"acb1937d-feb2-4f41-8b9b-8960f606440c"},{"id":"3ad67fb4-c6b9-4111-9d84-ba9cd33cf71f"},{"id":"b5fca0ce-20b8-430a-a417-b508459acbc6"},{"id":"b868805f-61ec-4f21-8122-a1cd86dd60e1"},{"id":"3cfd596f-5b15-49ad-9178-800c1c680c84"},{"id":"90d10cae-04cc-41f9-afec-20e2941c53d6"},{"id":"6999d907-c937-43cb-b9da-fc717e56dfc0"},{"id":"c872a664-801f-4e1c-86ae-fc64a5458694"},{"id":"32ff03f4-d14a-432b-bf47-2a778b849e82"},{"id":"54f660c3-5568-4217-a7ac-1b34bcdd6f4b"},{"id":"7ee5c03d-c28a-4e73-ae18-4eab9c8cbdce"},{"id":"0c0e87a8-e6d0-4125-8996-1df31fa75884"},{"id":"ee23a200-cf6e-4d89-bbec-7e087f02003d"}]}]}