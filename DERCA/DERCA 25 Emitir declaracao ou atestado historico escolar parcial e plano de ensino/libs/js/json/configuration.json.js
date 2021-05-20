Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 25 Emitir declaração ou atestado, histórico escolar parcial e plano de ensino","publishDate":"20/05/2021 16:32:21","pages":[{"id":"dfa59d55-04f9-4c38-9131-f3ddd5400617","name":"[DERCA] 25 Emitir declaração ou atestado, histórico escolar parcial e plano de ensino","version":"1.0","author":"ariel","image":"files\\diagrams\\DERCA]_25_Emitir_declaracao_ou_atestado,_historico_escolar_parcial_e_plano_de_ensino.png","isSubprocessPage":false,"elements":[{"id":"6bf91aa9-8886-4423-93e4-a34019875169","name":"[DERCA] 25 Emitir declaração ou atestado, histórico escolar parcial e plano de ensino","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2421.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"580c2d79-77c1-46f9-9a92-7e8c13ea8b62","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":160.0,"y":76.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"258cff1d-654b-4b82-bd8c-09a313e9c4e8","name":"Verificar tipo de documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":306.0,"y":59.0}],"radius":0.0,"height":64.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"667a4515-a43a-473b-8348-3142c640dad0","name":"Tipo de documento solicitado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":348.0,"y":179.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Outros documentos","elementType":"SequenceFlow","properties":[]},{"name":"Atestado de matrícula ou frequência / Atestado de provável formando","elementType":"SequenceFlow","properties":[]},{"name":"Carta de apresentação","elementType":"SequenceFlow","properties":[]}]},{"id":"4fa6394a-07d0-4475-a6d8-ef89430d5348","name":"Registrar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1350.0,"y":1169.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"892ab4bc-306a-48bf-b84e-9ac018333419","name":"Interessado solicita planos de ensino?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1537.0,"y":1179.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"64341a42-6322-450e-bb62-6c1d1c3f04b0","name":"Interessado foi aprovado na disciplina solicitada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1707.0,"y":1179.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"f80d5c15-d3f9-4077-a964-34652e6ab973","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1853.0,"y":1162.5}],"radius":0.0,"height":75.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"91f6459b-dbab-4518-aec4-ab33a470a10d","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2081.0,"y":1169.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ddecf59b-8b5f-4e78-b36f-f3ea61b6e484","name":"Incluir em PDF planos de ensino","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1682.0,"y":1331.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e03681e5-bc3a-4d20-b218-7da5b4d6ecc2","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2106.0,"y":1341.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Interessado solicitou outros documentos além dos planos de ensino?","elementType":"SequenceFlow","properties":[]}]},{"id":"9bfc221d-04d3-47b3-aee5-289839965472","name":"Interessado solicitou outros documentos além dos planos de ensino?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2106.0,"y":1446.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"c7180322-7b64-4511-b243-632a6c8a606b","name":"Colher informações para confecção do documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1507.0,"y":1430.0}],"radius":0.0,"height":72.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8715d4d-e3ef-48e8-8e0c-d75dfff306fd","name":"Documentos necessários já estão arquivados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1537.0,"y":1559.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"6ca2d1e4-5aa8-43ab-970d-14347e038589","name":"[DIARQ] 02 Emprestar documentos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1337.0,"y":1659.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2002%20Emprestar%20documentos/#list","type":"url"}},{"id":"c13bf1f8-894c-415c-9414-75d7568b08c9","name":"Verificar informações colhidas para a confecção do documento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1500.0,"y":1651.0}],"radius":0.0,"height":76.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"013b903e-ee61-4460-83b0-e70f000fa6aa","name":"Informações estão corretas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1537.0,"y":1808.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"f1c724ac-651f-4a26-a910-dfeedfc8d10e","name":"Realizar correções necessárias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1343.0,"y":1798.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1ca26f62-ea31-4fc2-8787-2a75e8341539","name":"Foi resolvido o problema?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1368.0,"y":1932.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e82f9865-423b-4dad-92d4-9189defbb7ec","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1331.5,"y":2046.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ae3c705-8cfa-4137-891c-b771eba1952f","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1343.0,"y":2149.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d2001aeb-ecf2-460b-8cab-c878998137a3","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1537.0,"y":1932.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Interessado solicitou histórico escolar?","elementType":"SequenceFlow","properties":[]}]},{"id":"2b5953d4-ef79-4a52-9ec3-e1f4770ebfe9","name":"Interessado solicitou histórico escolar?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1716.0,"y":1932.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"e3f2a58b-ac26-43a4-8216-03ab0b311dc8","name":"Histórico escolar é anterior à implantação do SIE?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1716.0,"y":2055.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"18f5fe41-7c9c-4317-a246-47908de069fa","name":"Incluir documento 211 - Histórico escolar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1808.0,"y":2039.0}],"radius":0.0,"height":72.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39e53a56-6b71-4ecc-bd4b-88f45dbb12a8","name":"Incluir em PDF histórico escolar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1808.0,"y":2144.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1004f5e2-e01b-427a-b345-3e5c77df1f27","name":"Incluir documento solicitado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1691.0,"y":1788.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ae0d4707-b406-40d5-b050-736c4bff86e4","name":"Incluir documento 987 - Declaração simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1963.0,"y":1785.0}],"radius":0.0,"height":67.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f7c5aa9-2986-439d-8ee7-089dc904875a","name":"Enviar documentos ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1970.0,"y":2045.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"249aa44f-6058-47fb-8937-02085bd8b821","name":"Interessado solicita Atestado de frequência?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":222.0,"y":340.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"a5cb80b6-a737-4267-88c9-a16a31fa5b7c","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":654.0,"y":322.5}],"radius":0.0,"height":75.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec6f5d45-395a-4a23-b7c7-b07d722e0aee","name":"Colher informação da frequência do  interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":657.0,"y":1021.0}],"radius":0.0,"height":60.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"52dd94ae-8ca3-4a18-8de9-56379ee29d2c","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":475.0,"y":1018.0}],"radius":0.0,"height":66.0,"width":122.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4955c7fd-7824-499e-a58e-20bea83aa9ac","name":"Verificar situação do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":197.0,"y":476.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"11e4ce7e-cb8c-4e77-b134-794df1119645","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":380.5,"y":486.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Situação do interessado permite a emissão do atestado?","elementType":"SequenceFlow","properties":[]}]},{"id":"8b683c18-7723-4c60-a588-56f5a49a3ef5","name":"Situação do interessado permite a emissão do atestado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":380.5,"y":584.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0ea56641-badd-4a95-a2f5-0785250b37ce","name":"Incluir documento 158 - Atestado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":197.0,"y":687.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"98c13bf9-fd9e-4f89-a7bc-bd85ccb6e5f4","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":345.0,"y":685.0}],"radius":0.0,"height":72.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e6d3b7ec-7fc3-4a1d-b6f9-bf1e141cdff8","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":260.0,"y":855.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2548ad12-8bb6-4318-b20c-6b86cf0434f5","name":"Verificar situação do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":923.0,"y":323.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"de29f738-0e68-48b6-ab09-4f9b19e0127d","name":"Situação do interessado permite a emissão de carta de apresentação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":948.0,"y":425.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"59571262-1440-48bf-8efb-9fd4dea953fb","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1071.0,"y":529.0}],"radius":0.0,"height":72.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1cd42a76-3fe5-4c9b-8c6b-df6f59eafd86","name":"Incluir documento 305 - Carta de apresentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":918.0,"y":531.0}],"radius":0.0,"height":72.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2d03dd9b-d80c-43c4-a0eb-a8411737e0df","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":986.0,"y":699.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"60d3cbda-704b-4256-b8ba-03d6fae3741b","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2081.0,"y":2277.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"7fd98fc5-eaa9-4741-a38c-401d73ba1c61","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2239.0,"y":2292.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"741d5bd7-3151-49a0-8838-482a98e41ce3","name":"DIPROT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":273.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6f8a8d1b-78b0-4123-b5d2-57e1ea43b232","name":"Coordenação de curso","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":293.0}],"radius":0.0,"height":681.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2a745dc0-7925-47fe-8cb4-29930e81759c","name":"Professor Responsável","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":974.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"987d7799-805e-495d-9f26-d987bb8936f9","name":"DISEC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1135.0}],"radius":0.0,"height":1106.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"81bbd017-94bf-402c-8d98-c7de623e91dc","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2241.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"dfa59d55-04f9-4c38-9131-f3ddd5400617","containerName":"[DERCA] 25 Emitir declaração ou atestado, histórico escolar parcial e plano de ensino","isSubprocess":false,"elements":[{"id":"6bf91aa9-8886-4423-93e4-a34019875169","value":"[DERCA] 25 Emitir declaração ou atestado, histórico escolar parcial e plano de ensino"},{"id":"741d5bd7-3151-49a0-8838-482a98e41ce3","value":"DIPROT"},{"id":"6f8a8d1b-78b0-4123-b5d2-57e1ea43b232","value":"Coordenação de curso"},{"id":"2a745dc0-7925-47fe-8cb4-29930e81759c","value":"Professor Responsável"},{"id":"987d7799-805e-495d-9f26-d987bb8936f9","value":"DISEC"},{"id":"81bbd017-94bf-402c-8d98-c7de623e91dc","value":"DIARQ"},{"id":"580c2d79-77c1-46f9-9a92-7e8c13ea8b62","value":""},{"id":"258cff1d-654b-4b82-bd8c-09a313e9c4e8","value":"Verificar tipo de documento solicitado"},{"id":"64341a42-6322-450e-bb62-6c1d1c3f04b0","value":"Interessado foi aprovado na disciplina solicitada?"},{"id":"f80d5c15-d3f9-4077-a964-34652e6ab973","value":"Incluir documento 872 - Despacho simples"},{"id":"91f6459b-dbab-4518-aec4-ab33a470a10d","value":"Comunicar interessado"},{"id":"7fd98fc5-eaa9-4741-a38c-401d73ba1c61","value":""},{"id":"f8715d4d-e3ef-48e8-8e0c-d75dfff306fd","value":"Documentos necessários já estão arquivados?"},{"id":"c13bf1f8-894c-415c-9414-75d7568b08c9","value":"Verificar informações colhidas para a confecção do documento"},{"id":"ae0d4707-b406-40d5-b050-736c4bff86e4","value":"Incluir documento 987 - Declaração simples "},{"id":"6ca2d1e4-5aa8-43ab-970d-14347e038589","value":"[DIARQ] 02 Emprestar documentos"},{"id":"4fa6394a-07d0-4475-a6d8-ef89430d5348","value":"Registrar solicitação"},{"id":"892ab4bc-306a-48bf-b84e-9ac018333419","value":"Interessado solicita planos de ensino?"},{"id":"9bfc221d-04d3-47b3-aee5-289839965472","value":"Interessado solicitou outros documentos além dos planos de ensino?"},{"id":"c7180322-7b64-4511-b243-632a6c8a606b","value":"Colher informações para confecção do documento"},{"id":"1f7c5aa9-2986-439d-8ee7-089dc904875a","value":"Enviar documentos ao interessado"},{"id":"ddecf59b-8b5f-4e78-b36f-f3ea61b6e484","value":"Incluir em PDF planos de ensino"},{"id":"e03681e5-bc3a-4d20-b218-7da5b4d6ecc2","value":""},{"id":"013b903e-ee61-4460-83b0-e70f000fa6aa","value":"Informações estão corretas?"},{"id":"f1c724ac-651f-4a26-a910-dfeedfc8d10e","value":"Realizar correções necessárias"},{"id":"1ca26f62-ea31-4fc2-8787-2a75e8341539","value":"Foi resolvido o problema?"},{"id":"5ae3c705-8cfa-4137-891c-b771eba1952f","value":"Comunicar interessado"},{"id":"d2001aeb-ecf2-460b-8cab-c878998137a3","value":""},{"id":"2b5953d4-ef79-4a52-9ec3-e1f4770ebfe9","value":"Interessado solicitou histórico escolar?"},{"id":"1004f5e2-e01b-427a-b345-3e5c77df1f27","value":"Incluir documento solicitado"},{"id":"e82f9865-423b-4dad-92d4-9189defbb7ec","value":"Incluir documento 872 - Despacho simples"},{"id":"18f5fe41-7c9c-4317-a246-47908de069fa","value":"Incluir documento 211 - Histórico escolar"},{"id":"e3f2a58b-ac26-43a4-8216-03ab0b311dc8","value":"Histórico escolar é anterior à implantação do SIE?"},{"id":"39e53a56-6b71-4ecc-bd4b-88f45dbb12a8","value":"Incluir em PDF histórico escolar"},{"id":"667a4515-a43a-473b-8348-3142c640dad0","value":"Tipo de documento solicitado?"},{"id":"4955c7fd-7824-499e-a58e-20bea83aa9ac","value":"Verificar situação do interessado"},{"id":"8b683c18-7723-4c60-a588-56f5a49a3ef5","value":"Situação do interessado permite a emissão do atestado?"},{"id":"0ea56641-badd-4a95-a2f5-0785250b37ce","value":"Incluir documento 158 - Atestado"},{"id":"98c13bf9-fd9e-4f89-a7bc-bd85ccb6e5f4","value":"Incluir documento 872 - Despacho simples"},{"id":"e6d3b7ec-7fc3-4a1d-b6f9-bf1e141cdff8","value":"Comunicar interessado"},{"id":"2548ad12-8bb6-4318-b20c-6b86cf0434f5","value":"Verificar situação do interessado"},{"id":"1cd42a76-3fe5-4c9b-8c6b-df6f59eafd86","value":"Incluir documento 305 - Carta de apresentação"},{"id":"de29f738-0e68-48b6-ab09-4f9b19e0127d","value":"Situação do interessado permite a emissão de carta de apresentação?"},{"id":"59571262-1440-48bf-8efb-9fd4dea953fb","value":"Incluir documento 872 - Despacho simples"},{"id":"2d03dd9b-d80c-43c4-a0eb-a8411737e0df","value":"Comunicar interessado"},{"id":"249aa44f-6058-47fb-8937-02085bd8b821","value":"Interessado solicita Atestado de frequência?"},{"id":"a5cb80b6-a737-4267-88c9-a16a31fa5b7c","value":"Incluir documento 872 - Despacho simples"},{"id":"52dd94ae-8ca3-4a18-8de9-56379ee29d2c","value":"Incluir documento 872 - Despacho simples"},{"id":"ec6f5d45-395a-4a23-b7c7-b07d722e0aee","value":"Colher informação da frequência do  interessado"},{"id":"11e4ce7e-cb8c-4e77-b134-794df1119645","value":""},{"id":"60d3cbda-704b-4256-b8ba-03d6fae3741b","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"c1a87afc-a61b-4d79-a4b4-547675e57201"},{"id":"0e6901b3-b4d6-4a45-9c3c-016d1a0e3b0b"},{"id":"847ea041-08c7-495d-9c70-73a923104782"},{"id":"1352c940-ddc6-4961-a7a9-ac7bcee16b72"},{"id":"27a482a4-4d4d-4410-abbe-c678198d1e4c"},{"id":"c781ae5b-3a4a-40da-b16d-b909e5862ac0"},{"id":"928309e8-fb32-422a-822b-a394b9d54fde"},{"id":"0472220d-7086-4c7b-92c2-31545d75437e"},{"id":"a91558ca-b046-4446-92b6-b3bbd232a805"},{"id":"889c6d10-7f39-49c5-8e2f-4b6d01c1152d"},{"id":"437d8064-fb89-4247-9ffb-c8e8a6cde309"},{"id":"fa36407d-dd61-44fd-87e5-7f117be18298"},{"id":"cc73cc99-6325-4312-813c-70bedce61830"},{"id":"a18f6264-657b-4890-86dc-99fbf8bb7196"},{"id":"4babfe4b-ab44-4558-a66c-1c71b9433f73"},{"id":"6c08062f-e6ba-45e7-b61d-5d45becd4ddc"},{"id":"11840cb3-d6f6-45ec-a11d-4811c130ab97"},{"id":"37706743-f724-4ed5-9028-51bdcc2d57c2"},{"id":"60bf84f8-7048-44f4-8fc3-e48e014d8c8f"},{"id":"401bc741-c528-4e1d-bf49-b870aa63b0db"},{"id":"229fb52b-3f57-40e2-8a6e-ab02a7490785"},{"id":"6b11bfca-49d2-47e0-b107-e63c734db8aa"},{"id":"4484688b-1a5f-4577-ac0e-aa91f15c6d20"},{"id":"bfb7615b-cb9f-4b7c-ae91-a08569aec802"},{"id":"9647ddcb-6196-4bf2-8a95-e098bb43e7e8"},{"id":"bbf35ef2-997c-4121-b1e6-902ce2a4914d"},{"id":"c7f0c631-cf0c-48d6-ba96-5177dddcb146"},{"id":"6fa3ce8e-55f7-441b-8d0c-1eee1f807ae5"},{"id":"84236305-d22c-467d-9a5e-fe967594cd71"},{"id":"e3c39d57-91e3-4fe4-bcde-6d62231fb459"}]}]}