Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 76 Enviar comprovantes de ressarcimento de plano de saúde","publishDate":"03/08/2022 12:11:16","pages":[{"id":"27157513-7b34-4cbf-842b-85d41994093d","name":"[DAP] 76 Enviar comprovantes de ressarcimento de plano de saúde","version":"1.0","author":"gilmar","image":"files\\diagrams\\DAP]_76_Enviar_comprovantes_de_ressarcimento_de_plano_de_saude.png","isSubprocessPage":false,"elements":[{"id":"c2aa7702-5add-4ce7-85f5-1aa873cd2d4f","name":"[DAP] 76 Enviar comprovantes de ressarcimento de plano de saúde","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":853.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"eaa0aed2-4e3e-4584-8733-1f6abd2bb600","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Comprovantes de pagamento de plano de sa&uacute;de</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":133.0,"y":52.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5bc20d5b-a0a4-467d-aa49-7e0c40a244cb","name":"Abrir processo  comprobatório de ressarcimento de plano de saúde","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":208.0,"y":28.0}],"radius":0.0,"height":77.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a009684f-96fe-4b23-82fe-91d74d225374","name":"Incluir documento 075 - Formulário comprovação ressar. plano saúde","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":210.0,"y":135.0}],"radius":0.0,"height":75.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6515d6ea-42a3-4915-ab8f-ac94f4ec85bd","name":"Incluir em PDF comprovantes de ressarcimento de plano saúde ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":214.0,"y":239.0}],"radius":0.0,"height":72.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"237b6f44-d38f-494c-a5c9-6cffa51b8583","name":"Analisar comprovantes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":219.0,"y":410.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a56faca2-712f-4e9d-b5e1-135a93c7a806","name":"Necessita de ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":472.0,"y":408.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"468e8f7b-2534-419b-86d2-a1b1a31628fb","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":567.5,"y":396.0}],"radius":0.0,"height":64.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"abcc5436-94f3-4c35-98a7-0bc01c782db4","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":569.0,"y":257.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"45322b81-1222-4467-a783-fab78d732924","name":"Necessita de ajustes SIAPE?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":472.0,"y":543.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"5946f35c-ad5e-4843-9eac-e1f12d0863cb","name":"Realizar acertos  no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":595.0,"y":533.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d8b74624-a8fc-4ec7-8d21-e04f98faa4c2","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":444.0,"y":663.0}],"radius":0.0,"height":67.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6031c4f2-90d4-4c89-bb4d-c215ac8de18b","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":447.0,"y":765.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"5c308e71-cf42-4586-8ce2-a1e5665fe30b","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":602.0,"y":780.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6932bac8-a2f2-4746-88ad-1b25508b1544","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":328.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"205cb310-748a-4d77-8ec0-3d0cd34a8fbd","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":348.0}],"radius":0.0,"height":400.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"24193e4b-430f-4c51-b5e0-f3d2ea88846d","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":748.0}],"radius":0.0,"height":125.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"27157513-7b34-4cbf-842b-85d41994093d","containerName":"[DAP] 76 Enviar comprovantes de ressarcimento de plano de saúde","isSubprocess":false,"elements":[{"id":"c2aa7702-5add-4ce7-85f5-1aa873cd2d4f","value":"[DAP] 76 Enviar comprovantes de ressarcimento de plano de saúde"},{"id":"6932bac8-a2f2-4746-88ad-1b25508b1544","value":"Interessado"},{"id":"205cb310-748a-4d77-8ec0-3d0cd34a8fbd","value":"DAP"},{"id":"24193e4b-430f-4c51-b5e0-f3d2ea88846d","value":"DIARQ"},{"id":"eaa0aed2-4e3e-4584-8733-1f6abd2bb600","value":""},{"id":"5bc20d5b-a0a4-467d-aa49-7e0c40a244cb","value":"Abrir processo  comprobatório de ressarcimento de plano de saúde"},{"id":"6515d6ea-42a3-4915-ab8f-ac94f4ec85bd","value":"Incluir em PDF comprovantes de ressarcimento de plano saúde "},{"id":"5c308e71-cf42-4586-8ce2-a1e5665fe30b","value":""},{"id":"237b6f44-d38f-494c-a5c9-6cffa51b8583","value":"Analisar comprovantes"},{"id":"a56faca2-712f-4e9d-b5e1-135a93c7a806","value":"Necessita de ajustes?"},{"id":"abcc5436-94f3-4c35-98a7-0bc01c782db4","value":"Fazer correções necessárias"},{"id":"45322b81-1222-4467-a783-fab78d732924","value":"Necessita de ajustes SIAPE?"},{"id":"5946f35c-ad5e-4843-9eac-e1f12d0863cb","value":"Realizar acertos  no SIAPE"},{"id":"d8b74624-a8fc-4ec7-8d21-e04f98faa4c2","value":"Incluir documento 872 - Despacho simples"},{"id":"a009684f-96fe-4b23-82fe-91d74d225374","value":"Incluir documento 075 - Formulário comprovação ressar. plano saúde"},{"id":"468e8f7b-2534-419b-86d2-a1b1a31628fb","value":"Incluir documento 872 - Despacho simples"},{"id":"6031c4f2-90d4-4c89-bb4d-c215ac8de18b","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"89cde5d0-a2fd-4c1e-885c-40e35e4c6508"},{"id":"c732842b-49be-434d-81ef-ea02a54ce3f5"},{"id":"25113ef1-ce29-4f24-890e-04e749c05d8f"},{"id":"4b34034f-1f78-4edf-be18-cdb8e9a20a64"},{"id":"6ad55b2e-f104-440c-9589-17d0c8566b69"},{"id":"c073fe6d-85b1-4dfc-802e-3c85a05e2fe5"},{"id":"54c7dcb4-a4ab-49a0-bfc9-8e478248252d"},{"id":"1b999f19-4653-424d-8320-9bb7eebb46a8"}]}]}