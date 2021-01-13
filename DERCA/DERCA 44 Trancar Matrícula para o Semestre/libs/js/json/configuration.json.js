Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 44 Trancar Matrícula para o Semestre","publishDate":"13/01/2021 09:39:53","pages":[{"id":"765c04be-522a-4aa3-abd8-a0127bf87bc0","name":"[DERCA] 44 Trancar Matrícula para o Semestre ou Cancelar Matrícula em Disciplina","version":"1.0","author":"ariel","image":"files\\diagrams\\DERCA]_44_Trancar_Matricula_para_o_Semestre_ou_Cancelar_Matricula_em_Disciplina.png","isSubprocessPage":false,"elements":[{"id":"ee2f4f13-f126-419d-b607-31e71bdc0855","name":"[DERCA] 44 Trancar Matrícula para o Semestre ou Cancelar Matrícula em Disciplina","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2498.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ba61610a-1c49-44ca-92f0-966fe964de06","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":148.0,"y":121.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"2293e272-a2ea-405b-b5cd-0daafec98a26","name":"Abrir processo de trancamento de matrícula","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":261.0,"y":101.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fcf42b2a-d9ff-4271-9b89-a127d34f7618","name":"Incluir documento  269 - Formulário de trancamento de matrícula","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":446.5,"y":99.5}],"radius":0.0,"height":75.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"77cec6b3-df09-4c11-9c75-327109c02d2a","name":"Incluir em PDF histórico escolar atualizado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":450.0,"y":236.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"23e2e899-ecad-4d12-97f7-10d57368e644","name":"Incluir em PDF documento de identificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":241.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99a9ef0d-e67f-4f74-bac0-0f4ab5265cc8","name":"Aluno possui cadastro na Biblioteca?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":300.0,"y":411.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d8aec6c0-6aef-4dfc-a8b6-f20f07e189b7","name":"Aluno possui livros pendentes para entrega?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":474.0,"y":411.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"af7ed70c-9c2f-422f-8e5b-e097f5d9c4fe","name":"Aluno poderá entregar os livros pendentes?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":636.0,"y":411.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0ff1a19a-24a9-409e-8b9a-e6e60739e6d6","name":"Incluir documento 019 - Termo de compromisso para entrega de livros ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":767.0,"y":393.5}],"radius":0.0,"height":77.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9831022-fd5a-44aa-9f5d-92a3159fd155","name":"Liberar assinatura externa para o aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":959.0,"y":398.0}],"radius":0.0,"height":66.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2ac73a9-2732-434f-8330-e3eec6d0dc77","name":"Assinar documento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1148.0,"y":189.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"76239f22-a290-48e6-9a15-2f6c5b04c9f2","name":"Aguardar a entrega dos livros","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":641.0,"y":550.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"62ca4355-2852-48dd-b99e-42df3011978e","name":"Incluir em PDF comprovante de negativa de débitos da Biblioteca","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":437.5,"y":525.0}],"radius":0.0,"height":80.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bbb222c7-e5d2-44f2-ac34-b020f95ac620","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":269.0,"y":523.0}],"radius":0.0,"height":73.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e1e66b3-eb98-4728-a7ae-28c6a9173311","name":"Liberar acesso ao usuário externo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":705.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"35380ba9-4c37-4483-ba64-c774627599de","name":"Encaminhar para o curso correspondente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":270.0,"y":811.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"893be744-c4fa-4a73-bcbb-5d736ef2f562","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":980.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0ebc07fa-34c5-43e4-8504-11ab820bb78b","name":"Verificar o processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":275.0,"y":1369.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8fd0f5d8-18f9-4b99-8acb-67a91465da91","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":270.0,"y":1458.0}],"radius":0.0,"height":60.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c51d97c2-12de-429b-8c3b-e6e4e11dd40e","name":"Trancamento de acordo com regimento e legislação vigente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":300.0,"y":1579.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"8c66c234-11ec-4a82-aa10-21dcf186bb86","name":"Analisar situação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":448.0,"y":981.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec38ee1a-35d7-4b8a-87f3-97183f0ed989","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":588.0,"y":976.0}],"radius":0.0,"height":71.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"061f7d22-ef2e-44a6-8f58-ffbe85c35f2e","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":300.0,"y":1711.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Foi autorizado o trancamento de matrícula?","elementType":"SequenceFlow","properties":[]}]},{"id":"8f2eb3fa-ccf3-4c80-94f9-621ce30dccef","name":"Foi autorizado o trancamento de matrícula?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":300.0,"y":1812.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4d771446-9048-4ecb-9aeb-5e533eaf5b87","name":"Comunicar decisão ao aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":452.0,"y":1802.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6438cd91-cc75-414c-a198-e42b8feb6048","name":"Aguardar ciência do aluno","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":597.0,"y":1817.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"2c5dd57c-3993-450c-8b99-744767f99966","name":"Aluno deu ciência no processo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":723.0,"y":1812.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"5f4611de-c673-4bdd-9677-f3f251c22ea8","name":"Incluir em PDF comprovante de recebimento de e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":863.0,"y":1908.0}],"radius":0.0,"height":74.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"59cf4cb9-c0c7-4ebf-9bc6-9f4bc21223f1","name":"Aluno solicitou reanálise?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":897.0,"y":1782.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"94be9bcf-7e37-4a5b-a354-37a7dcbec662","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":872.0,"y":1157.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72431725-a711-4dc7-9e13-b06adacd8e21","name":"Foi autorizado o trancamento de matrícula?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1131.0,"y":1728.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4b019ec8-4207-4f6e-98d3-1589590ae9f3","name":"Atualizar situação de matrícula do aluno no SIE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":272.0,"y":1983.0}],"radius":0.0,"height":69.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"092ced18-b25e-4510-afad-1fcebee592c5","name":"Incluir em PDF comprovante de trancamento no SIE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.0,"y":1981.0}],"radius":0.0,"height":73.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a3effec-49b6-425f-b9f3-99a450d55905","name":"Comunicar decisão ao aluno","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":448.0,"y":2145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c5193ef8-c909-43fb-aefd-bd46199bd128","name":"Aguardar ciência do aluno","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":608.0,"y":2160.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"9c974485-22aa-4c6c-bf9e-6e7d1a3b6e51","name":"Aluno deu ciência no processo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":732.0,"y":2155.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a56c411b-19f1-4aa6-85b5-7c2e3d6c0401","name":"Incluir em PDF comprovante de recebimento de e-mail","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":862.0,"y":2138.0}],"radius":0.0,"height":74.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e2bb7c1-3a5c-4de2-b776-0b001376dcad","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1031.0,"y":2357.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2fa80d4-1a46-4b9b-9258-4fc99abc8efa","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1061.0,"y":2468.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d3cec211-54fb-436d-9ff4-37f230e2e2f8","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":336.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2e10aad0-286e-4270-9b17-6788f348c07b","name":"BIBLIO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":356.0}],"radius":0.0,"height":314.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4feec41b-ca85-4c9f-a38e-8f086b7e4162","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":670.0}],"radius":0.0,"height":251.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"120b13d2-1ce0-45e0-b53b-06c95242b0e8","name":"Coordenação de Curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":921.0}],"radius":0.0,"height":178.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7619c801-701d-4769-8e18-6068095ad1a3","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1099.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fa47b6e8-1ebf-4884-910c-d1629eda78a3","name":"DERCA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1299.0}],"radius":0.0,"height":1019.4,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e5d18172-3422-43b7-b356-32a00c06c9ba","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2318.4}],"radius":0.0,"height":199.6001,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"765c04be-522a-4aa3-abd8-a0127bf87bc0","containerName":"[DERCA] 44 Trancar Matrícula para o Semestre ou Cancelar Matrícula em Disciplina","isSubprocess":false,"elements":[{"id":"ee2f4f13-f126-419d-b607-31e71bdc0855","value":"[DERCA] 44 Trancar Matrícula para o Semestre ou Cancelar Matrícula em Disciplina"},{"id":"d3cec211-54fb-436d-9ff4-37f230e2e2f8","value":"Aluno"},{"id":"2e10aad0-286e-4270-9b17-6788f348c07b","value":"BIBLIO"},{"id":"4feec41b-ca85-4c9f-a38e-8f086b7e4162","value":"DIPROT"},{"id":"120b13d2-1ce0-45e0-b53b-06c95242b0e8","value":"Coordenação de Curso"},{"id":"7619c801-701d-4769-8e18-6068095ad1a3","value":"PROGRAD"},{"id":"fa47b6e8-1ebf-4884-910c-d1629eda78a3","value":"DERCA"},{"id":"e5d18172-3422-43b7-b356-32a00c06c9ba","value":"DIARQ"},{"id":"ba61610a-1c49-44ca-92f0-966fe964de06","value":""},{"id":"2293e272-a2ea-405b-b5cd-0daafec98a26","value":"Abrir processo de trancamento de matrícula"},{"id":"62ca4355-2852-48dd-b99e-42df3011978e","value":"Incluir em PDF comprovante de negativa de débitos da Biblioteca"},{"id":"35380ba9-4c37-4483-ba64-c774627599de","value":"Encaminhar para o curso correspondente"},{"id":"2a3effec-49b6-425f-b9f3-99a450d55905","value":"Comunicar decisão ao aluno"},{"id":"9e1e66b3-eb98-4728-a7ae-28c6a9173311","value":"Liberar acesso ao usuário externo"},{"id":"9e2bb7c1-3a5c-4de2-b776-0b001376dcad","value":"Realizar tratamento arquivístico"},{"id":"b2fa80d4-1a46-4b9b-9258-4fc99abc8efa","value":""},{"id":"a56c411b-19f1-4aa6-85b5-7c2e3d6c0401","value":"Incluir em PDF comprovante de recebimento de e-mail"},{"id":"893be744-c4fa-4a73-bcbb-5d736ef2f562","value":"Dar ciência no processo"},{"id":"4b019ec8-4207-4f6e-98d3-1589590ae9f3","value":"Atualizar situação de matrícula do aluno no SIE"},{"id":"8f2eb3fa-ccf3-4c80-94f9-621ce30dccef","value":"Foi autorizado o trancamento de matrícula?"},{"id":"77cec6b3-df09-4c11-9c75-327109c02d2a","value":"Incluir em PDF histórico escolar atualizado"},{"id":"fcf42b2a-d9ff-4271-9b89-a127d34f7618","value":"Incluir documento  269 - Formulário de trancamento de matrícula"},{"id":"092ced18-b25e-4510-afad-1fcebee592c5","value":"Incluir em PDF comprovante de trancamento no SIE"},{"id":"4d771446-9048-4ecb-9aeb-5e533eaf5b87","value":"Comunicar decisão ao aluno"},{"id":"0ebc07fa-34c5-43e4-8504-11ab820bb78b","value":"Verificar o processo"},{"id":"c51d97c2-12de-429b-8c3b-e6e4e11dd40e","value":"Trancamento de acordo com regimento e legislação vigente?"},{"id":"8fd0f5d8-18f9-4b99-8acb-67a91465da91","value":"Incluir documento 860 - Despacho"},{"id":"8c66c234-11ec-4a82-aa10-21dcf186bb86","value":"Analisar situação"},{"id":"ec38ee1a-35d7-4b8a-87f3-97183f0ed989","value":"Incluir documento 191 - Parecer"},{"id":"061f7d22-ef2e-44a6-8f58-ffbe85c35f2e","value":""},{"id":"59cf4cb9-c0c7-4ebf-9bc6-9f4bc21223f1","value":"Aluno solicitou reanálise?"},{"id":"94be9bcf-7e37-4a5b-a354-37a7dcbec662","value":"Incluir documento 191 - Parecer"},{"id":"c5193ef8-c909-43fb-aefd-bd46199bd128","value":"Aguardar ciência do aluno"},{"id":"6438cd91-cc75-414c-a198-e42b8feb6048","value":"Aguardar ciência do aluno"},{"id":"72431725-a711-4dc7-9e13-b06adacd8e21","value":"Foi autorizado o trancamento de matrícula?"},{"id":"9c974485-22aa-4c6c-bf9e-6e7d1a3b6e51","value":"Aluno deu ciência no processo?"},{"id":"2c5dd57c-3993-450c-8b99-744767f99966","value":"Aluno deu ciência no processo?"},{"id":"5f4611de-c673-4bdd-9677-f3f251c22ea8","value":"Incluir em PDF comprovante de recebimento de e-mail"},{"id":"23e2e899-ecad-4d12-97f7-10d57368e644","value":"Incluir em PDF documento de identificação"},{"id":"99a9ef0d-e67f-4f74-bac0-0f4ab5265cc8","value":"Aluno possui cadastro na Biblioteca?"},{"id":"bbb222c7-e5d2-44f2-ac34-b020f95ac620","value":"Incluir documento 872 - Despacho simples"},{"id":"d8aec6c0-6aef-4dfc-a8b6-f20f07e189b7","value":"Aluno possui livros pendentes para entrega?"},{"id":"af7ed70c-9c2f-422f-8e5b-e097f5d9c4fe","value":"Aluno poderá entregar os livros pendentes?"},{"id":"76239f22-a290-48e6-9a15-2f6c5b04c9f2","value":"Aguardar a entrega dos livros"},{"id":"0ff1a19a-24a9-409e-8b9a-e6e60739e6d6","value":"Incluir documento 019 - Termo de compromisso para entrega de livros "},{"id":"d9831022-fd5a-44aa-9f5d-92a3159fd155","value":"Liberar assinatura externa para o aluno"},{"id":"b2ac73a9-2732-434f-8330-e3eec6d0dc77","value":"Assinar documento"},{"id":"911aa692-7502-4b56-a94d-63250c7c54c9"},{"id":"046b273c-2ed7-48c3-a5bf-974f41a9174f"},{"id":"76e5adad-ed59-461e-8457-2090d956ed6a"},{"id":"8940ad4f-9907-4b38-a7ae-664797f96b08"},{"id":"e6606bb7-e8a2-4dc8-b69c-4aa817d72c6d"},{"id":"99f12873-615f-45c8-a556-3a3d7721d0de"},{"id":"5d5cabcb-6e5d-4f57-9f3d-4754ccd599a1"},{"id":"c1ff02f9-6447-44a2-8744-c3d71d13fa85"},{"id":"0ade7427-e3ec-425d-8533-1a548fc749e7"},{"id":"92255cdd-6c9c-44c6-8037-e9fe5dcb4883"},{"id":"95776ede-671c-459c-af24-1805a7b2ef13"},{"id":"9f328242-a0e3-4c10-b1f3-846b3b2b0da2"}]}]}