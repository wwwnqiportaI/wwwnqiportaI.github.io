Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CGSEI] 04 Incluir processos no SEI","publishDate":"10/12/2020 00:25:30","pages":[{"id":"4b37ea12-194c-4754-a516-78da3883dff6","name":"[CGSEI] 04 Incluir processos no SEI","version":"1.0","author":"andressabo","image":"files\\diagrams\\CGSEI]_04_Incluir_processos_no_SEI.png","isSubprocessPage":false,"elements":[{"id":"4faedcea-545d-4a30-a14b-e7bd8d2be897","name":"[CGSEI] 04 Incluir processos no SEI","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1242.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"01d40b29-29b3-4bb6-a4a0-900634e6f772","name":"Necessidade de inserir os diagramas de processos na Base de Conhecimento do SEI","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Lista de Servi&ccedil;os do setor, BPMN UFCSPA.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":173.0,"y":141.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"c308caa0-7d25-47bc-bf10-2e02c61f74d7","name":"Mapear os processos do setor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":272.0,"y":126.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a14e766-7c83-4cdc-8c39-5ee62cd0e142","name":"Realizar análise prévia dos diagramas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":551.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0eb69aee-9261-4405-9845-9f6906ea47bc","name":"[NQI] 01 Analisar artefatos dos processos das unidades da UFCSPA ","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":575.5,"y":1144.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/NQI/%5bNQI%5d%2001%20Analisar%20artefatosdas%20unidades%20da%20UFCSPA/#list","type":"url"}},{"id":"abbd5cca-505f-4b2b-8850-0503f17a44e4","name":"Artefatos validados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":788.0,"y":992.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1b6e983c-dc67-495d-8961-f0aa093b6937","name":"Criar a base de conhecimento do processo no SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1475.5,"y":767.0}],"radius":0.0,"height":81.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ca63123b-8515-412b-ae0d-93fec1daab8f","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DAS: Base de conhecimento do SEI atualizada com as imagens dos diagramas dos processos de um setor da UFCSPA validados pelo NQI e diagramas publicados no Portal de Processos.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1511.0,"y":871.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c5edff52-4cca-4f0b-b255-76a2ee81818b","name":"Unidade requisitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":432.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"61eb033d-b474-4945-9e16-1e096a120f7f","name":"CGSEI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":452.0}],"radius":0.0,"height":610.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0500d43d-d83d-4be9-b7fd-7706d485e9ef","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1062.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"590d3ec3-9e86-409b-9811-3c67660aab5d","name":"Processo necessita de documentos específicos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":443.0,"y":136.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e78a81f9-21b0-4c4e-ac5b-4bad6b9d0df5","name":"Criar os modelos dos documentos que farão parte do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":602.0,"y":119.0}],"radius":0.0,"height":74.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ca0d08c1-2338-43cb-bf1b-a2d1d4e8b12e","name":"Enviar ao Comitê Gestor do SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13611118-648b-4c22-884b-9b4e264e241a","name":"Foram enviados modelos de documentos pela Unidade requisitante?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":312.0,"y":561.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2b7a9426-85e9-4516-b098-afffb23c0e54","name":"Criar os documentos no SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":152.0,"y":551.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3d17d95-b523-4bd8-b66a-4845d0bc663d","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":312.0,"y":668.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Necessita de esclarecimentos?","elementType":"SequenceFlow","properties":[]}]},{"id":"35656858-4da5-4844-aa58-e77efe1023fc","name":"Necessita de esclarecimentos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":442.0,"y":668.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"923e9212-11b9-4f9a-9a4d-a31c5ba9685f","name":"Solicitar esclarecimentos para a unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":753.0,"y":657.0}],"radius":0.0,"height":62.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ada462c9-030a-406e-ad38-9e1984319b46","name":"Prestar esclarecimentos sobre o processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":751.5,"y":340.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f403876-177b-4b8a-bade-78e5c078f0db","name":"Realizar adequações no diagrama conforme padrão SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":560.0,"y":782.5}],"radius":0.0,"height":85.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"44971bfc-1fec-4507-863f-5ac9b85d0f4b","name":"Enviar para análise do NQI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.5,"y":896.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"060dd927-b7ea-467b-94c7-fcc377aaa57a","name":"É necessário criar novo tipo de processo no SEI?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1059.0,"y":795.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"89568923-fd35-4b0c-86ac-1491fbd47af7","name":"Classificar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1034.0,"y":660.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"287537de-0827-47c9-afea-24e1aeb4b5c5","name":"Criar tipo de processo no SEI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1220.0,"y":660.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"295382d2-8b60-4c53-a3c2-5553d04dbb80","name":"Solicitar informações para a base de conhecimento do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1343.0,"y":776.5}],"radius":0.0,"height":79.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86109493-7f75-47a7-8c48-63b761d551d9","name":"Fornecer informações para a base de conhecimento do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1342.5,"y":245.0}],"radius":0.0,"height":87.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4b37ea12-194c-4754-a516-78da3883dff6","containerName":"[CGSEI] 04 Incluir processos no SEI","isSubprocess":false,"elements":[{"id":"4faedcea-545d-4a30-a14b-e7bd8d2be897","value":"[CGSEI] 04 Incluir processos no SEI"},{"id":"c5edff52-4cca-4f0b-b255-76a2ee81818b","value":"Unidade requisitante"},{"id":"61eb033d-b474-4945-9e16-1e096a120f7f","value":"CGSEI"},{"id":"0500d43d-d83d-4be9-b7fd-7706d485e9ef","value":"NQI"},{"id":"01d40b29-29b3-4bb6-a4a0-900634e6f772","value":"Necessidade de inserir os diagramas de processos na Base de Conhecimento do SEI"},{"id":"c308caa0-7d25-47bc-bf10-2e02c61f74d7","value":"Mapear os processos do setor"},{"id":"0a14e766-7c83-4cdc-8c39-5ee62cd0e142","value":"Realizar análise prévia dos diagramas"},{"id":"abbd5cca-505f-4b2b-8850-0503f17a44e4","value":"Artefatos validados?"},{"id":"1b6e983c-dc67-495d-8961-f0aa093b6937","value":"Criar a base de conhecimento do processo no SEI"},{"id":"ca63123b-8515-412b-ae0d-93fec1daab8f","value":""},{"id":"ca0d08c1-2338-43cb-bf1b-a2d1d4e8b12e","value":"Enviar ao Comitê Gestor do SEI"},{"id":"35656858-4da5-4844-aa58-e77efe1023fc","value":"Necessita de esclarecimentos?"},{"id":"923e9212-11b9-4f9a-9a4d-a31c5ba9685f","value":"Solicitar esclarecimentos para a unidade"},{"id":"44971bfc-1fec-4507-863f-5ac9b85d0f4b","value":"Enviar para análise do NQI"},{"id":"ada462c9-030a-406e-ad38-9e1984319b46","value":"Prestar esclarecimentos sobre o processo"},{"id":"e78a81f9-21b0-4c4e-ac5b-4bad6b9d0df5","value":"Criar os modelos dos documentos que farão parte do processo"},{"id":"590d3ec3-9e86-409b-9811-3c67660aab5d","value":"Processo necessita de documentos específicos?"},{"id":"8f403876-177b-4b8a-bade-78e5c078f0db","value":"Realizar adequações no diagrama conforme padrão SEI"},{"id":"060dd927-b7ea-467b-94c7-fcc377aaa57a","value":"É necessário criar novo tipo de processo no SEI?"},{"id":"89568923-fd35-4b0c-86ac-1491fbd47af7","value":"Classificar processo"},{"id":"287537de-0827-47c9-afea-24e1aeb4b5c5","value":"Criar tipo de processo no SEI"},{"id":"13611118-648b-4c22-884b-9b4e264e241a","value":"Foram enviados modelos de documentos pela Unidade requisitante?"},{"id":"2b7a9426-85e9-4516-b098-afffb23c0e54","value":"Criar os documentos no SEI"},{"id":"c3d17d95-b523-4bd8-b66a-4845d0bc663d","value":""},{"id":"295382d2-8b60-4c53-a3c2-5553d04dbb80","value":"Solicitar informações para a base de conhecimento do processo"},{"id":"86109493-7f75-47a7-8c48-63b761d551d9","value":"Fornecer informações para a base de conhecimento do processo"},{"id":"0eb69aee-9261-4405-9845-9f6906ea47bc","value":"[NQI] 01 Analisar artefatos dos processos das unidades da UFCSPA "},{"id":"e92f03bd-6c2b-4b2e-b44b-31e48a341386"},{"id":"0c5669b1-c18c-4574-a039-3624a4fd58cf"},{"id":"f6118156-108c-4a88-8394-46ed4c0bc076"},{"id":"e0f7274f-9ee5-49fe-b09c-e6454bd3e466"},{"id":"fb723ed3-f948-4884-83b5-dd0a0986135b"},{"id":"97006ab6-c846-41c6-af02-9e40be5c601f"},{"id":"b1547365-0e92-4394-9414-88523cffe38e"},{"id":"11ef589d-2231-4d3f-91b9-e507258287e3"},{"id":"8a7c3618-6224-49ea-88a9-c7bfcb28db64"},{"id":"473c45a0-99ea-4712-b632-0bd4e04321c8"},{"id":"4cbf8b97-8c5d-434a-93e1-0b72494b0053"},{"id":"3f8781c6-a492-4b9f-a3bf-f16633b41c53"},{"id":"f5e0a154-8ed1-45f0-870d-afba95bb8039"},{"id":"63e6a8b6-5b0b-405e-bff7-cc473a34c340"},{"id":"cc58841f-863d-45e9-8fd6-6268413d9ed3"},{"id":"960b4f3b-6948-4a6a-b951-3286de109b0a"},{"id":"e07c3576-6356-4450-b218-7e3fcb9de788"},{"id":"028be6e9-0f75-46c6-ade4-4acd8f48e919"}]}]}