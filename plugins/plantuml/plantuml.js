cheerpjInit({ disableLoadTimeReporting: true, disableErrorReporting: true }).then(() => {
    cheerpjRunMain("com.plantuml.api.cheerpj.v1.RunInit", "./plugins/plantuml/plantuml-core.jar").then(() => {
        document.querySelectorAll(".plantuml").forEach((e, _) => {
            cjCall("com.plantuml.api.cheerpj.v1.Svg", "convert", "light", e.textContent).then((svg) => {
                e.innerHTML = svg;
            });
        });
    })
});
