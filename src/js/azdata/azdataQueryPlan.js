function azdataQueryPlan(container, queryPlanGraph)
{
    this.queryPlanGraph = queryPlanGraph;
	if (container != null)
	{
		this.init(container);
	}
};

azdataQueryPlan.prototype.init = function(container)
{
    this.container = container;

    mxEvent.addListener(window, 'unload', mxUtils.bind(this, function()
    {
        this.destroy();
    }));

    mxEvent.disableContextMenu(container);

    var graph = new mxGraph(container);
    graph.setPanning(true);
	graph.setTooltips(true);        

    graph.convertValueToString = function(cell)
    {
        if (cell.value != null && cell.value.label != null)
        {
            return cell.value.label;
        }

        return mxGraph.prototype.convertValueToString.apply(this, arguments); // "supercall"
    };

    graph.isHtmlLabel = function(cell)
    {
        return false;
    };
    
    graph.isCellEditable = function(cell)
    {
        return false;
    };

    graph.getTooltipForCell = function(cell)
    {
        if (cell.value != null && cell.value.metrics != null)
        {
            var tooltip = '';
            for (var i = 0; i < cell.value.metrics.length; ++i)
            {
                tooltip += cell.value.metrics[i].name + ': ' + cell.value.metrics[i].value;
                if (i != cell.value.metrics.length - 1)
                {
                    tooltip += '\n';
                }
            }
            return tooltip;
        }

        return mxGraph.prototype.getTooltipForCell.apply(this, arguments); // "supercall"
    }

    var parent = graph.getDefaultParent();
    var layout = new mxCompactTreeLayout(graph, true);

    graph.getModel().beginUpdate();
    try
    {
        var vertex = graph.insertVertex(parent, null, this.queryPlanGraph, 20, 20, 80, 30);
        var stack = 
        [
            { 
                vertex: vertex,
                node: this.queryPlanGraph 
            }
        ];
        while (stack.length > 0)
        {
            var entry = stack.pop();
            if (entry.node.children)
            {
                for (var i = 0; i < entry.node.children.length; ++i)
                {
                    var node = entry.node.children[i];
                    vertex = graph.insertVertex(parent, null, node, 20, 20, 80, 30);
                    graph.insertEdge(parent, null, '', entry.vertex, vertex);
                    stack.push(
                        { 
                            vertex: vertex,
                            node: node
                        });
                }
            }
        }
        layout.execute(parent);
    }
    finally
    {
        graph.getModel().endUpdate();
    }
};

azdataQueryPlan.prototype.destroy = function()
{
    if (!this.destroyed)
	{
        this.destroyed = true;
        this.container = null;
    }
};
