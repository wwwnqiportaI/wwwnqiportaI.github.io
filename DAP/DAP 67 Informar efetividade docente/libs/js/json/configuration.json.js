Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 67 Informar efetividade docente","publishDate":"29/11/2020 20:16:45","pages":[{"id":"c62f03be-b71f-46ce-b26d-b96a989c9fe7","name":"[DAP] 67 Informar efetividade docente","version":"1.0","author":"anasv","image":"files\\diagrams\\DAP]_67_Informar_efetividade_docente.png","isSubprocessPage":false,"elements":[{"id":"65ef590d-7460-45d5-9e89-a41edb3cbe98","name":"[DAP] 67 Informar efetividade docente","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1106.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"2a951a0d-8329-4ae4-84a1-28b06ef795cb","name":"Necessidade de  informar a efetividade mensalmente","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":142.0,"y":78.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e1c255b3-3f05-4c9b-a759-69b877e2a742","name":"Abrir processo de controle de efetividade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":59.0}],"radius":0.0,"height":69.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d1b1e6c-91d8-44a0-b12b-f34f67dfe04d","name":"Incluir documento  011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":256.0,"y":150.0}],"radius":0.0,"height":62.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b183d73c-92f0-499c-be0e-bfd5b7323af9","name":"Manter processo aberto na unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":263.0,"y":227.0}],"radius":0.0,"height":60.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b3105173-107c-45ab-8373-f8212ed7c51d","name":"Enviar processo com retorno programado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":265.0,"y":310.0}],"radius":0.0,"height":67.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d96f680f-be20-4779-af04-86b004c51c4e","name":"Incluir documento 951- Formulário de  efetividade docente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":257.0,"y":855.0}],"radius":0.0,"height":69.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2005aa1a-609d-4731-80a5-cb61de46c23b","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":738.0,"y":163.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"924e9973-ec5d-465a-ae17-936962d727f4","name":"Analisar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1074.0,"y":153.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"efe26fbe-c4bd-4262-b477-1738c89da249","name":"Necessita de ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1238.0,"y":163.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"25c15159-9d06-4e4d-afc9-7368e274e107","name":"Incluir documento  872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1205.0,"y":282.0}],"radius":0.0,"height":61.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"85685d0a-1568-4b7c-bc34-3f4f64c93d8a","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.0,"y":856.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1898a87f-a307-41fb-9bb1-ac9be5f494f6","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1372.0,"y":151.0}],"radius":0.0,"height":64.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"828b966e-4a96-4b10-ade3-cbd06b998a22","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":704.0,"y":263.0}],"radius":0.0,"height":68.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0eb556bd-f606-4bb6-a065-7797727181bd","name":"Comunicar autoridade superior","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":713.0,"y":358.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"156654d2-94d6-4b7b-a39e-15e64d88fab0","name":"Registrar no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":713.0,"y":461.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bcc241c5-4797-4c63-a70d-3e9c379691a4","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1381.0,"y":1044.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7544123c-4a00-4ca8-8f3b-70d2947c3269","name":"Efetividade docentes informada","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1522.0,"y":1059.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b3682070-6dfa-4884-978e-e369a2bd8d8c","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":803.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6961bd7a-f353-491b-a614-830795ae9954","name":"Chefia imediata","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":823.0}],"radius":0.0,"height":162.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d6ecee86-40e6-4b5a-a488-e5a80cef6401","name":"Divisão de Arquivo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":985.0}],"radius":0.0,"height":141.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"c62f03be-b71f-46ce-b26d-b96a989c9fe7","containerName":"[DAP] 67 Informar efetividade docente","isSubprocess":false,"elements":[{"id":"65ef590d-7460-45d5-9e89-a41edb3cbe98","value":"[DAP] 67 Informar efetividade docente"},{"id":"b3682070-6dfa-4884-978e-e369a2bd8d8c","value":"DAP"},{"id":"6961bd7a-f353-491b-a614-830795ae9954","value":"Chefia imediata"},{"id":"d6ecee86-40e6-4b5a-a488-e5a80cef6401","value":"Divisão de Arquivo"},{"id":"e1c255b3-3f05-4c9b-a759-69b877e2a742","value":"Abrir processo de controle de efetividade"},{"id":"d96f680f-be20-4779-af04-86b004c51c4e","value":"Incluir documento 951- Formulário de  efetividade docente"},{"id":"bcc241c5-4797-4c63-a70d-3e9c379691a4","value":"Realizar tratamento arquivístico"},{"id":"7544123c-4a00-4ca8-8f3b-70d2947c3269","value":"Efetividade docentes informada"},{"id":"1d1b1e6c-91d8-44a0-b12b-f34f67dfe04d","value":"Incluir documento  011 - Ofício"},{"id":"b3105173-107c-45ab-8373-f8212ed7c51d","value":"Enviar processo com retorno programado"},{"id":"b183d73c-92f0-499c-be0e-bfd5b7323af9","value":"Manter processo aberto na unidade"},{"id":"2005aa1a-609d-4731-80a5-cb61de46c23b","value":""},{"id":"156654d2-94d6-4b7b-a39e-15e64d88fab0","value":"Registrar no SIAPE"},{"id":"828b966e-4a96-4b10-ade3-cbd06b998a22","value":"Incluir documento 872 - Despacho simples"},{"id":"0eb556bd-f606-4bb6-a065-7797727181bd","value":"Comunicar autoridade superior"},{"id":"924e9973-ec5d-465a-ae17-936962d727f4","value":"Analisar processo"},{"id":"efe26fbe-c4bd-4262-b477-1738c89da249","value":"Necessita de ajustes?"},{"id":"25c15159-9d06-4e4d-afc9-7368e274e107","value":"Incluir documento  872 - Despacho simples"},{"id":"85685d0a-1568-4b7c-bc34-3f4f64c93d8a","value":"Fazer correções necessárias"},{"id":"1898a87f-a307-41fb-9bb1-ac9be5f494f6","value":"Incluir documento 872 - Despacho simples"},{"id":"2a951a0d-8329-4ae4-84a1-28b06ef795cb","value":"Necessidade de  informar a efetividade mensalmente"},{"id":"c0032766-e64f-4fc7-a8fe-7f40148827b5"},{"id":"51770b41-e00f-4a54-b41a-51aa44f64958"},{"id":"f727a392-088d-4ae1-ba94-9bd296c984b2"},{"id":"9b088bf2-d2a4-457e-9874-98c7c16fac7d"},{"id":"7196691b-b9a9-4386-b09b-0af12e07072d"},{"id":"921c2562-2f1f-4854-9b4f-5c6e0117d556"},{"id":"f32bc2b1-7b76-4e0b-b9a1-ff765592935c"},{"id":"86febb1d-a3a7-44ca-bedc-060c8b9b43be"},{"id":"79cfc890-4638-4da5-a25f-86a5ca26c26d"},{"id":"d2cd3f91-1601-4ab0-9e05-05e9fd587af6"},{"id":"bc15b208-e0f5-4d70-8105-cdf77d82266c"},{"id":"faade3f6-cced-4296-a2fa-92e3b598bd1e"}]}]}