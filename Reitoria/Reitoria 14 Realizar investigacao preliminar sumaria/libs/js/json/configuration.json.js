Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[Reitoria] 14 Realizar investigação preliminar sumária","publishDate":"31/03/2021 15:22:01","pages":[{"id":"c13b408d-5d57-4fb7-8070-a9479c4a661a","name":"[Reitoria] 14 Realizar investigação preliminar sumária","version":"1.0","author":"mbort","image":"files\\diagrams\\Reitoria]_14_Realizar_investigacao_preliminar_sumaria.png","isSubprocessPage":false,"elements":[{"id":"c366c91b-1386-4eb8-a307-eeb4ecf0ee28","name":"[Reitoria] 14 Realizar investigação preliminar sumária","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2216.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"a35efb18-1c51-4d14-86a7-1936b629a58e","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Reitor recebe den&uacute;ncia ou verifica necessidade de investiga&ccedil;&atilde;o de of&iacute;cio.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":121.0,"y":126.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f06678f1-99ca-4863-adaa-4b86c9dc759e","name":"Identificar necessidade de abertura de Investigação preliminar sumária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":201.0,"y":90.5}],"radius":0.0,"height":103.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"af9770d6-b152-4f1d-83f6-504b2bb2ea52","name":"Investigação será realizada em decorrência de denúncia recebida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":361.0,"y":121.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"72a6a4e8-99a8-4f50-a724-5f3ea89fd14f","name":"Abrir processo de investigação preliminar sumária (IPS)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":483.5,"y":103.5}],"radius":0.0,"height":77.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"265ca695-2160-40bd-9e8c-3bb49d81be40","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":482.0,"y":278.0}],"radius":0.0,"height":71.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d14cdd54-e531-473b-aae5-621972a3f4a9","name":"Alterar o tipo de processo recebido para processo de IPS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":329.0,"y":272.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b8a183f0-52b6-4a66-9823-2fedf9ff0945","name":"Incluir documento 872- Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":480.0,"y":481.0}],"radius":0.0,"height":63.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5863e9f8-078b-4c16-99df-00ca56de641e","name":"Comunicar Comitê Gestor do SEI para criação de unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":631.0,"y":482.0}],"radius":0.0,"height":61.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f7885ebb-45c6-49ba-a0ce-c58fc7bd7bd7","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":668.5,"y":584.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"6dd3b031-1aef-4804-b6a0-630154fe4e82","name":"[CGSEI] 01 Cadastrar novas unidades no SEI","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":643.5,"y":935.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/CGSEI/%5bCGSEI%5d%2001%20Cadastrar%20novas%20unidades%20no%20SEI/#list","type":"url"}},{"id":"f603b294-bdac-48d9-ad52-58ead5c93b06","name":"Aguardar criação da unidade pelo CGSEI","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":816.5,"y":589.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b4b73418-f243-4546-9acd-0b51962c7ffb","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":811.5,"y":691.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"918105dc-0fc4-454a-9800-025b6e552273","name":"Enviar processo para a unidade IPS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":782.5,"y":792.0}],"radius":0.0,"height":58.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e42e3379-ae04-4151-83de-b7d43c8d60ab","name":"Examinar as informações e provas existentes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":765.0,"y":1570.0}],"radius":0.0,"height":60.0,"width":133.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2eb4e66-7dfc-4f2b-a4af-3fa7c2e0dabb","name":"Instruir processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":597.0,"y":1570.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"42bcba98-5169-4842-8b49-3a109fd716fd","name":"Incluir documento 159 - Relatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":590.0,"y":1838.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdf76bd3-048a-4a8b-aa8a-88ae4913a7a5","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":942.0,"y":555.0}],"radius":0.0,"height":75.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6580115c-48e4-4ae7-a12b-5198089f6dd4","name":"Incluir documento 056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1139.0,"y":1136.0}],"radius":0.0,"height":76.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cd648776-f563-4c28-9e50-51ded3b3e742","name":"Deliberar de acordo com o constante no relatório de IPS e o parecer da PFUFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1133.0,"y":447.0}],"radius":0.0,"height":89.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56f12bd9-74f3-40a3-9d57-b6306b06388b","name":"Comunicar Comitê Gestor do SEI para excluir a unidade IPS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1137.5,"y":291.0}],"radius":0.0,"height":61.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b5c9e81-0216-4394-9a12-401e046a1600","name":"Incluir documento 860 - Despacho ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1141.0,"y":66.0}],"radius":0.0,"height":62.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e52af3d8-4617-463a-bbe0-a3ea4976e4cc","name":"Tipo de procedimento adotado","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1386.0,"y":77.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"PAD rito ordinário","elementType":"SequenceFlow","properties":[]},{"name":"PAD rito sumário","elementType":"SequenceFlow","properties":[]},{"name":"Termo de ajustamento de conduta","elementType":"SequenceFlow","properties":[]},{"name":"Arquivamento","elementType":"SequenceFlow","properties":[]}]},{"id":"902563dd-98a7-46d3-a03d-d7c46a21d911","name":"Solicitar ao Comitê Gestor do SEI a criação da unidade TAC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1527.0,"y":325.0}],"radius":0.0,"height":86.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2538a857-fc0e-49f9-9be5-5d9e1a1e0007","name":"Incluir documento 318 - Termo de ajustamento de conduta ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1534.5,"y":480.0}],"radius":0.0,"height":79.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4148ebd-e185-4f91-b323-7caede01dc4e","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1577.5,"y":1332.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"830d302b-4b78-4406-89fa-c092e11f0196","name":"Solicitar ao Comitê Gestor do SEI o encerramento da unidade TAC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1708.0,"y":527.0}],"radius":0.0,"height":113.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94b8a820-3982-4788-bbcf-ee641cf53f03","name":"[Reitoria] 13 Apurar infração disciplinar em rito ordinário","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1870.0,"y":338.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/Reitoria/Reitoria%2013%20Apurar%20infra%C3%A7%C3%A3o%20disciplinar%20em%20rito%20ordin%C3%A1rio/#list","type":"url"}},{"id":"9c0d2b72-9e5c-4f05-9d65-6c448d562018","name":"[Reitoria] 15 Apurar infração disciplinar em rito sumário","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2120.0,"y":330.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"cb56998f-30c6-4645-9fd9-12668596a142","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2102.6,"y":2143.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7583242b-268a-44de-a185-3edebdddb0e8","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2258.0,"y":2158.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c6e467b8-e5e2-4981-83bc-01ba68dad6b7","name":"REITORIA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":851.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a9dfba34-076e-41b5-b983-3ea05931823d","name":"CGSEI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":871.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e1b25667-35a8-40ff-8061-66e7ef4e9ea9","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1071.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"dc884d94-b0c5-4f3e-98ba-ecfb47a935c6","name":"Unidade de TAC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1271.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c4c0d2bf-04a4-4b13-a6af-cd1c4eb1aa83","name":"Servidor designado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1471.0}],"radius":0.0,"height":635.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c73d9523-f4c3-4ddb-b085-ea345f4eb591","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2106.0}],"radius":0.0,"height":130.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"c13b408d-5d57-4fb7-8070-a9479c4a661a","containerName":"[Reitoria] 14 Realizar investigação preliminar sumária","isSubprocess":false,"elements":[{"id":"c366c91b-1386-4eb8-a307-eeb4ecf0ee28","value":"[Reitoria] 14 Realizar investigação preliminar sumária"},{"id":"c6e467b8-e5e2-4981-83bc-01ba68dad6b7","value":"REITORIA"},{"id":"a9dfba34-076e-41b5-b983-3ea05931823d","value":"CGSEI"},{"id":"e1b25667-35a8-40ff-8061-66e7ef4e9ea9","value":"PFUFCSPA"},{"id":"dc884d94-b0c5-4f3e-98ba-ecfb47a935c6","value":"Unidade de TAC"},{"id":"c4c0d2bf-04a4-4b13-a6af-cd1c4eb1aa83","value":"Servidor designado"},{"id":"c73d9523-f4c3-4ddb-b085-ea345f4eb591","value":"DIARQ"},{"id":"a35efb18-1c51-4d14-86a7-1936b629a58e","value":""},{"id":"72a6a4e8-99a8-4f50-a724-5f3ea89fd14f","value":"Abrir processo de investigação preliminar sumária (IPS)"},{"id":"e42e3379-ae04-4151-83de-b7d43c8d60ab","value":"Examinar as informações e provas existentes"},{"id":"cd648776-f563-4c28-9e50-51ded3b3e742","value":"Deliberar de acordo com o constante no relatório de IPS e o parecer da PFUFCSPA"},{"id":"d14cdd54-e531-473b-aae5-621972a3f4a9","value":"Alterar o tipo de processo recebido para processo de IPS"},{"id":"265ca695-2160-40bd-9e8c-3bb49d81be40","value":"Incluir documento 011 - Ofício"},{"id":"b8a183f0-52b6-4a66-9823-2fedf9ff0945","value":"Incluir documento 872- Despacho simples"},{"id":"5863e9f8-078b-4c16-99df-00ca56de641e","value":"Comunicar Comitê Gestor do SEI para criação de unidade"},{"id":"918105dc-0fc4-454a-9800-025b6e552273","value":"Enviar processo para a unidade IPS"},{"id":"c2eb4e66-7dfc-4f2b-a4af-3fa7c2e0dabb","value":"Instruir processo"},{"id":"42bcba98-5169-4842-8b49-3a109fd716fd","value":"Incluir documento 159 - Relatório"},{"id":"8b5c9e81-0216-4394-9a12-401e046a1600","value":"Incluir documento 860 - Despacho "},{"id":"e52af3d8-4617-463a-bbe0-a3ea4976e4cc","value":"Tipo de procedimento adotado"},{"id":"56f12bd9-74f3-40a3-9d57-b6306b06388b","value":"Comunicar Comitê Gestor do SEI para excluir a unidade IPS"},{"id":"cb56998f-30c6-4645-9fd9-12668596a142","value":"Realizar tratamento arquivístico"},{"id":"7583242b-268a-44de-a185-3edebdddb0e8","value":""},{"id":"94b8a820-3982-4788-bbcf-ee641cf53f03","value":"[Reitoria] 13 Apurar infração disciplinar em rito ordinário"},{"id":"9c0d2b72-9e5c-4f05-9d65-6c448d562018","value":"[Reitoria] 15 Apurar infração disciplinar em rito sumário"},{"id":"f06678f1-99ca-4863-adaa-4b86c9dc759e","value":"Identificar necessidade de abertura de Investigação preliminar sumária"},{"id":"af9770d6-b152-4f1d-83f6-504b2bb2ea52","value":"Investigação será realizada em decorrência de denúncia recebida?"},{"id":"902563dd-98a7-46d3-a03d-d7c46a21d911","value":"Solicitar ao Comitê Gestor do SEI a criação da unidade TAC"},{"id":"2538a857-fc0e-49f9-9be5-5d9e1a1e0007","value":"Incluir documento 318 - Termo de ajustamento de conduta "},{"id":"e4148ebd-e185-4f91-b323-7caede01dc4e","value":"Assinar documento em bloco"},{"id":"830d302b-4b78-4406-89fa-c092e11f0196","value":"Solicitar ao Comitê Gestor do SEI o encerramento da unidade TAC"},{"id":"fdf76bd3-048a-4a8b-aa8a-88ae4913a7a5","value":"Incluir documento 872 - Despacho simples"},{"id":"6580115c-48e4-4ae7-a12b-5198089f6dd4","value":"Incluir documento 056 - Parecer procuradoria"},{"id":"f7885ebb-45c6-49ba-a0ce-c58fc7bd7bd7","value":""},{"id":"f603b294-bdac-48d9-ad52-58ead5c93b06","value":"Aguardar criação da unidade pelo CGSEI"},{"id":"b4b73418-f243-4546-9acd-0b51962c7ffb","value":""},{"id":"6dd3b031-1aef-4804-b6a0-630154fe4e82","value":"[CGSEI] 01 Cadastrar novas unidades no SEI"},{"id":"f22a26f4-e83d-40ad-94bf-7f379bbccf68"},{"id":"9e52d541-128e-4dc3-8a66-13acfcd81535"},{"id":"0ed90353-1bc9-4144-a517-d8e315a84c73"},{"id":"e166492e-7fc0-42cd-ab3b-2cb71899fc72"},{"id":"a7e8a5e8-297b-4ad1-8fb0-c05240868f00"},{"id":"7452dc07-e018-4c1a-9d8d-ed97a72baf59"},{"id":"95141c39-48a5-4e40-b8f0-b63b6e6a2dea"},{"id":"a2344c6a-cc94-452a-b488-741663b6650f"},{"id":"9656c677-0529-4ec1-b9ed-645ab0681a67"},{"id":"befb1a16-108c-4fb8-8e67-4f4b4e9d64e5"},{"id":"b215454e-a8d6-4d2b-b8b5-f54ba5f8b810"},{"id":"833e35cb-7171-408f-9ced-7796c99c6abb"},{"id":"86421f27-0b43-4406-b775-5eaa59f43465"},{"id":"1e7a2fe0-204d-44a3-8d44-2e5b9707dccd"},{"id":"9d52b9db-7a3f-4fc7-9c5b-aa9bfa3842f8"},{"id":"3900e0bb-5039-48d9-ab0b-5fd0ba03bd80"},{"id":"5bd5a578-599c-4f58-b0ed-43e242b1cbe0"},{"id":"30390e28-f136-4b25-929c-89fd5f897cb0"},{"id":"df641422-fd96-4d3b-a628-ac3ba9b81835"},{"id":"b2e15ce8-71d2-4458-8aa5-ce490a7fa92f"},{"id":"571913bd-45f6-452c-ae15-f7ba8573a5c6"},{"id":"b573d354-f350-44b7-95f9-22f4761e299c"},{"id":"7c71883f-fabc-4e11-8353-d78b5c18bfa2"},{"id":"cb14ed16-57c9-464a-8332-58c9613bfb31"},{"id":"b0228897-3182-4580-98b6-4eeca7a3acc5"},{"id":"a481c37d-2ef2-4830-b4b2-5270aebe7822"},{"id":"2768f651-a0f7-436d-bc31-a84798d136fd"},{"id":"09d7d70d-741f-4153-b699-a1dffe6d6efb"},{"id":"f09959f7-358b-4501-92d7-419828b79131"},{"id":"c0d23a6f-4635-4679-a4da-98248b2112fd"},{"id":"4ef7ec97-e74c-411f-adfe-2ead9ea10496"},{"id":"7e773e61-abf0-4dbc-93e9-890bbfc5f546"},{"id":"03ff713c-be3d-4075-97d3-e2c4aa7ea730"},{"id":"37b66576-43e8-4cda-a400-9269b5258aa3"},{"id":"37cd36ed-0da2-4fbd-a3b4-09808eb19ce3"},{"id":"2768ed54-ffce-472b-90b3-2a5b921d0b99"},{"id":"ec33f4bd-c0a0-4b8d-bcaa-f12a8a527290"}]}]}