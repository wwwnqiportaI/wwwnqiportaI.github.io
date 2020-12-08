Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PROGESP] 23 Solicitar afastamento no País ônus UFCSPA (diárias e passagens)","publishDate":"08/12/2020 13:29:19","pages":[{"id":"98b268d1-bd1b-4392-bf0e-d42604798f67","name":"[PROGESP] 23 Solicitar afastamento no País ônus UFCSPA (diárias e passagens)","version":"1.0","author":"alinebrancher","image":"files\\diagrams\\PROGESP]_23_Solicitar_afastamento_no_Pais_onus_UFCSPA_diarias_e_passagens.png","isSubprocessPage":false,"elements":[{"id":"e3ff7bc0-bebf-4aa7-a1a5-63e871dfeafd","name":"[PROGESP] 23 Solicitar afastamento no País ônus UFCSPA (diárias e passagens)","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":51.0,"y":50.0}],"radius":0.0,"height":3074.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"53222e30-7ad4-449d-ad8e-b96bb0caf30e","name":"Necessidade de afastamento para eventos no país","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Folders, Comprovante de inscri&ccedil;&atilde;o.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":166.0,"y":117.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"154824c3-44b3-4f57-bc73-ef61b7afce96","name":"Abrir processo de afastamento no País com ônus UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":96.0}],"radius":0.0,"height":72.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e8ff94f-baa1-4277-aa3d-d3fb569afb7a","name":"Incluir documento 894 - Formulário afastamento com ônus UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":351.0,"y":97.0}],"radius":0.0,"height":70.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6f118622-8312-4921-b5b2-df2d29c93248","name":"Incluir em PDF convite ou comprovação de inscrição ou de aceite de apresentação de trabalho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":345.0,"y":203.0}],"radius":0.0,"height":90.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b84e91f-f3a0-430a-919e-0f90f75db69c","name":"Incluir em PDF material promocional ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":365.0,"y":328.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"df256999-24de-498b-bd58-4837c05f39c4","name":"Se encontra nas excepcionalidades da base de conhecimento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":390.0,"y":501.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"957c8e06-5364-438a-9856-66bb6926564e","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":152.0,"y":488.0}],"radius":0.0,"height":66.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fa93916e-937c-47e2-a7e9-2579b2485e86","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":390.0,"y":645.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Chefia imediata é pró-reitoria?","elementType":"SequenceFlow","properties":[]}]},{"id":"ec8898d7-72c1-4ce1-9943-6a2e061a67e5","name":"Chefia imediata é pró-reitoria?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":390.0,"y":722.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e123ba62-773e-4994-8406-2ff1ecd044f1","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":175.0,"y":856.0}],"radius":0.0,"height":60.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b423144a-15e3-4601-90a2-4e8f8e8dd54b","name":"Afastamento autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":213.0,"y":949.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"fae937c9-d974-412b-af8a-6e4489d6a916","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":188.0,"y":1078.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a01404ac-e2c1-44e0-935b-0d40b99fec3e","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":377.0,"y":1343.0}],"radius":0.0,"height":66.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"417e1740-3191-4661-8535-eead009fa5ae","name":"Afastamento autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":408.0,"y":1578.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3c52b29d-2f3b-46f0-be78-6b4f0abda74d","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":427.0,"y":1731.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0e957932-c43c-4cca-bf1b-4fb9be8262dd","name":"Necessita de ajustes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":459.0,"y":1842.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"df1429c5-0fa3-4657-b4ee-9a87a57e7712","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":563.0,"y":190.0}],"radius":0.0,"height":54.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6458d7dc-7fae-45a7-9f6e-0672c7a72425","name":"Analisar e deliberar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":434.0,"y":1957.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"96916aa2-29bc-4ea9-88b3-e6739d95116c","name":"Incluir o documento  872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":2043.0}],"radius":0.0,"height":60.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7d9fe1b6-e1ef-4667-9830-419aad3b3011","name":"Afastamento aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":459.5,"y":2139.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7c1547c6-11ff-4740-9da7-1991fd62bf45","name":"Analisar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":434.5,"y":2281.00024}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"102585fe-a113-4e2e-9bfc-98a4b873f9d9","name":"Necessário ajustes no processo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":459.5,"y":2363.00024}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"a6de1f0b-b270-475e-bb54-e388e4ed16d4","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":671.0,"y":2353.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2445c5c5-7627-4f0f-b30c-3848aa70c710","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":782.0,"y":340.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"790f698c-baba-4663-8b01-ad925764fd09","name":"Fazer os  trâmites internos no SCDP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":429.0,"y":2464.8}],"radius":0.0,"height":72.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed72a01f-5b8e-4940-bb24-e8a2f72e76f1","name":"Incluir em PDF as reservas e informações sobre as diárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":670.0,"y":2464.8}],"radius":0.0,"height":72.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f038886d-86ef-4268-8c6a-202124612208","name":"Incluir documento 872 - Despacho simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":666.0,"y":2566.8}],"radius":0.0,"height":60.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"936e9f76-1186-49cf-a8dc-641cccdaf205","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":702.0,"y":2677.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"6590fea2-f56f-43bc-89ff-14df34c45b1d","name":"Realização do afastamento e viagem no país","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":886.0,"y":104.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"4095ee63-93cb-4fe6-9a6a-52fc1535fa02","name":"Incluir documento  855 -  Relatório de viagem","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":962.0,"y":89.0}],"radius":0.0,"height":60.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e1254791-0e0f-4a44-9303-e27b50250e68","name":"Incluir em PDF  canhotos de embarque","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":972.0,"y":172.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"abb941a4-5fc6-4ba2-b305-cbbb659f84c7","name":"Incluir em PDF comprovantes de participação do evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":967.0,"y":276.0}],"radius":0.0,"height":72.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"80b47768-84e7-4496-8af9-b145507288c4","name":"Fazer análise da documentação enviada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":972.0,"y":2303.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a1a084d6-678a-479a-9cd8-418c611112fd","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":963.0,"y":2402.0}],"radius":0.0,"height":63.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0518b7e8-6e6b-4a86-b632-77f05ad4fdea","name":"Necessário ajustes na documentação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1169.0,"y":2413.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"81ba6374-12da-4a88-b7ee-d8b7f4f9ec58","name":"Fazer correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1144.0,"y":463.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aafaa323-3db2-4f9c-8e35-cc50cc7f23b4","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1308.0,"y":2080.0}],"radius":0.0,"height":64.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89332be0-ad12-49ef-b3d7-689414c9a491","name":"Prestação de contas aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1445.0,"y":2092.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"315c39af-376c-4c72-ab4c-6291f1b7db65","name":"Realizar a prestação de contas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1420.0,"y":2368.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"706c5ba4-4d04-4927-bc34-2a9c4ceadd11","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1412.0,"y":2536.0}],"radius":0.0,"height":62.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b89b1ae4-08e0-4d82-95c6-08f3957642f8","name":"Publicar no boletim de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":677.0,"y":2827.6}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec952871-a582-4828-891c-639542c329ec","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1445.0,"y":2837.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"d97f9627-cf2d-42bc-aee0-56d1af10e6c5","name":"Comunicar interessado ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":295.0,"y":2827.6}],"radius":0.0,"height":53.0,"width":86.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"990885e4-1084-45b6-9ff9-949f9daaa0ce","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":241.0,"y":1568.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"768b1b98-0d81-43ae-978a-1f5fbcf7c4a0","name":"Realizar  tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1420.0,"y":3011.6}],"radius":0.0,"height":63.0,"width":91.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2575b978-2931-4f27-8056-3c056bed64db","name":"Afastamento  concedido e realizado ou não","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1551.0,"y":3027.6}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"8c28713d-5ab9-42da-86fa-a084a9dfa574","name":"Proposto (interessado) ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":50.0}],"radius":0.0,"height":778.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"520bc4bd-4fd0-48ec-8ee5-f1345a1803b9","name":"Chefia imediata","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":828.0}],"radius":0.0,"height":503.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"33a5db36-5b27-4aca-898e-928313d8cf83","name":"Pró-Reitoria da área","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":1331.0}],"radius":0.0,"height":349.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a0a33eab-45a5-4fb9-97fe-65a2b5fcd956","name":"PROGESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":1680.0}],"radius":0.0,"height":262.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c99652db-6aae-467c-8602-0bacedb5a10e","name":"Proponente (Reitora)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":1942.0}],"radius":0.0,"height":309.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2dc3dd43-7588-4238-9dbc-61fdac6086b5","name":"SCDP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":2251.0}],"radius":0.0,"height":524.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ae0462e9-71a8-4143-9d9a-47d27bd1dc8f","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":2775.8}],"radius":0.0,"height":201.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1cf1ec64-d5aa-4f35-b1de-c5158b7fe540","name":"Divisão de Arquivo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":101.0,"y":2977.6}],"radius":0.0,"height":146.3999,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"98b268d1-bd1b-4392-bf0e-d42604798f67","containerName":"[PROGESP] 23 Solicitar afastamento no País ônus UFCSPA (diárias e passagens)","isSubprocess":false,"elements":[{"id":"e3ff7bc0-bebf-4aa7-a1a5-63e871dfeafd","value":"[PROGESP] 23 Solicitar afastamento no País ônus UFCSPA (diárias e passagens)"},{"id":"8c28713d-5ab9-42da-86fa-a084a9dfa574","value":"Proposto (interessado) "},{"id":"520bc4bd-4fd0-48ec-8ee5-f1345a1803b9","value":"Chefia imediata"},{"id":"33a5db36-5b27-4aca-898e-928313d8cf83","value":"Pró-Reitoria da área"},{"id":"a0a33eab-45a5-4fb9-97fe-65a2b5fcd956","value":"PROGESP"},{"id":"c99652db-6aae-467c-8602-0bacedb5a10e","value":"Proponente (Reitora)"},{"id":"2dc3dd43-7588-4238-9dbc-61fdac6086b5","value":"SCDP"},{"id":"ae0462e9-71a8-4143-9d9a-47d27bd1dc8f","value":"DAP"},{"id":"1cf1ec64-d5aa-4f35-b1de-c5158b7fe540","value":"Divisão de Arquivo"},{"id":"53222e30-7ad4-449d-ad8e-b96bb0caf30e","value":"Necessidade de afastamento para eventos no país"},{"id":"154824c3-44b3-4f57-bc73-ef61b7afce96","value":"Abrir processo de afastamento no País com ônus UFCSPA"},{"id":"1e8ff94f-baa1-4277-aa3d-d3fb569afb7a","value":"Incluir documento 894 - Formulário afastamento com ônus UFCSPA"},{"id":"6f118622-8312-4921-b5b2-df2d29c93248","value":"Incluir em PDF convite ou comprovação de inscrição ou de aceite de apresentação de trabalho"},{"id":"5b84e91f-f3a0-430a-919e-0f90f75db69c","value":"Incluir em PDF material promocional "},{"id":"e123ba62-773e-4994-8406-2ff1ecd044f1","value":"Incluir documento 872 - Despacho simples"},{"id":"b423144a-15e3-4601-90a2-4e8f8e8dd54b","value":"Afastamento autorizado?"},{"id":"d97f9627-cf2d-42bc-aee0-56d1af10e6c5","value":"Comunicar interessado "},{"id":"b89b1ae4-08e0-4d82-95c6-08f3957642f8","value":"Publicar no boletim de serviço"},{"id":"768b1b98-0d81-43ae-978a-1f5fbcf7c4a0","value":"Realizar  tratamento arquivístico"},{"id":"2575b978-2931-4f27-8056-3c056bed64db","value":"Afastamento  concedido e realizado ou não"},{"id":"3c52b29d-2f3b-46f0-be78-6b4f0abda74d","value":"Incluir documento 872 - Despacho simples"},{"id":"0e957932-c43c-4cca-bf1b-4fb9be8262dd","value":"Necessita de ajustes?"},{"id":"6458d7dc-7fae-45a7-9f6e-0672c7a72425","value":"Analisar e deliberar"},{"id":"96916aa2-29bc-4ea9-88b3-e6739d95116c","value":"Incluir o documento  872 - Despacho simples"},{"id":"7d9fe1b6-e1ef-4667-9830-419aad3b3011","value":"Afastamento aprovado?"},{"id":"936e9f76-1186-49cf-a8dc-641cccdaf205","value":""},{"id":"ed72a01f-5b8e-4940-bb24-e8a2f72e76f1","value":"Incluir em PDF as reservas e informações sobre as diárias"},{"id":"790f698c-baba-4663-8b01-ad925764fd09","value":"Fazer os  trâmites internos no SCDP"},{"id":"80b47768-84e7-4496-8af9-b145507288c4","value":"Fazer análise da documentação enviada"},{"id":"4095ee63-93cb-4fe6-9a6a-52fc1535fa02","value":"Incluir documento  855 -  Relatório de viagem"},{"id":"e1254791-0e0f-4a44-9303-e27b50250e68","value":"Incluir em PDF  canhotos de embarque"},{"id":"abb941a4-5fc6-4ba2-b305-cbbb659f84c7","value":"Incluir em PDF comprovantes de participação do evento"},{"id":"df1429c5-0fa3-4657-b4ee-9a87a57e7712","value":"Fazer correções necessárias"},{"id":"f038886d-86ef-4268-8c6a-202124612208","value":"Incluir documento 872 - Despacho simples "},{"id":"7c1547c6-11ff-4740-9da7-1991fd62bf45","value":"Analisar processo"},{"id":"102585fe-a113-4e2e-9bfc-98a4b873f9d9","value":"Necessário ajustes no processo?"},{"id":"a6de1f0b-b270-475e-bb54-e388e4ed16d4","value":"Incluir documento 872 - Despacho simples"},{"id":"2445c5c5-7627-4f0f-b30c-3848aa70c710","value":"Fazer correções necessárias"},{"id":"a01404ac-e2c1-44e0-935b-0d40b99fec3e","value":"Incluir documento 872 - Despacho simples"},{"id":"417e1740-3191-4661-8535-eead009fa5ae","value":"Afastamento autorizado?"},{"id":"aafaa323-3db2-4f9c-8e35-cc50cc7f23b4","value":"Incluir documento 872 - Despacho simples"},{"id":"0518b7e8-6e6b-4a86-b632-77f05ad4fdea","value":"Necessário ajustes na documentação?"},{"id":"89332be0-ad12-49ef-b3d7-689414c9a491","value":"Prestação de contas aprovada?"},{"id":"81ba6374-12da-4a88-b7ee-d8b7f4f9ec58","value":"Fazer correções necessárias"},{"id":"df256999-24de-498b-bd58-4837c05f39c4","value":"Se encontra nas excepcionalidades da base de conhecimento?"},{"id":"957c8e06-5364-438a-9856-66bb6926564e","value":"Incluir documento 872 - Despacho simples"},{"id":"ec8898d7-72c1-4ce1-9943-6a2e061a67e5","value":"Chefia imediata é pró-reitoria?"},{"id":"fa93916e-937c-47e2-a7e9-2579b2485e86","value":""},{"id":"6590fea2-f56f-43bc-89ff-14df34c45b1d","value":"Realização do afastamento e viagem no país"},{"id":"315c39af-376c-4c72-ab4c-6291f1b7db65","value":"Realizar a prestação de contas"},{"id":"fae937c9-d974-412b-af8a-6e4489d6a916","value":"Comunicar interessado"},{"id":"990885e4-1084-45b6-9ff9-949f9daaa0ce","value":"Comunicar interessado"},{"id":"ec952871-a582-4828-891c-639542c329ec","value":""},{"id":"a1a084d6-678a-479a-9cd8-418c611112fd","value":"Incluir documento 872 - Despacho simples"},{"id":"706c5ba4-4d04-4927-bc34-2a9c4ceadd11","value":"Incluir documento 872 - Despacho simples"},{"id":"5599a0d4-cb9a-4f5d-b8bb-985507f02470"},{"id":"72abd97a-9a56-4734-a017-f934e5a48853"},{"id":"37805aca-4d63-4b63-8155-d750627b6097"},{"id":"64d17eef-56e2-4662-9125-1980fa521eb7"},{"id":"daad8cfb-1498-43de-87e5-070c6c1b520d"},{"id":"b35e77a9-9195-40ef-8bb9-f84929c89103"},{"id":"a81bbfc7-e1c3-4648-ac8e-97689cec9c6a"},{"id":"09f910dd-384c-4727-bc81-d9fb7d3de79f"},{"id":"b5ad81e1-5cff-46f4-8eea-cb28c7813407"},{"id":"7ab32697-8d1a-4a40-9b59-2c6a66ec61cb"},{"id":"04620c2c-b35b-42e3-bd6a-08baf642266f"},{"id":"868ef700-1f54-4db7-9748-572251de2073"},{"id":"3acf7678-2a9b-4e52-9a15-8a55247d91b4"},{"id":"8248785a-d4d8-4395-9afb-5c568951466c"},{"id":"fc8462e9-f1b0-4d2b-9974-1eb14e5a73f0"},{"id":"c87870d4-55c2-4e55-8085-fced6f13cbe2"},{"id":"fd4f1e56-b71c-49d3-9610-b1b607aedcf9","value":""},{"id":"88f13c40-7d3e-49db-b5ab-887f4d00f35b"},{"id":"ec5db5cc-312d-4dec-92c7-d985b8bf9fe1"},{"id":"e44d4126-359d-4e61-80eb-a541bcc8c4f4"},{"id":"a8d13d67-5675-4704-b7bb-c8334feeb8f8"},{"id":"2859f70e-5305-480c-b44c-fffb490e757e"},{"id":"c8015a65-c305-4535-9c04-433cf5eb65e6"},{"id":"7a20a91c-24e6-4c5b-ab71-690ccf91d432"},{"id":"ee2837e2-788c-4d2e-b211-3218285c0d8c"},{"id":"7bdb761c-ca24-4052-90e3-0f775150784e"},{"id":"b6c49eda-f945-4ff0-a512-b749abf61a8d"},{"id":"99fdae0a-820f-4dd5-9281-5988f44cf100"},{"id":"35441ab1-d316-4130-b8b3-fac853284322"},{"id":"12c52520-1034-490d-8d64-363d04f9c7e5"},{"id":"5415ca0f-8bf2-4f0d-96f3-acdf01efce84"},{"id":"b146a4ad-a6a6-4585-9d92-8626284973e0"}]}]}