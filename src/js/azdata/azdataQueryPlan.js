// icons that are packaged for use in query execution plan diagrams
var imageBasePath = "../../src/images/queryPlan/";

var azdataQueryPlanIconPaths =  
{
    // generic icons
    iteratorCatchAll:  imageBasePath + "iterator_catch_all.png",

    cursorCatchAll:  imageBasePath + "cursor_catch_all.png",

    languageConstructCatchAll:  imageBasePath + "language_construct_catch_all.png",

    // operator icons
    adaptiveJoin:  imageBasePath + "adaptive_join.png",

    assert:  imageBasePath + "assert.png",

    bitmap:  imageBasePath + "bitmap.png",

    clusteredIndexDelete:  imageBasePath + "clustered_index_delete.png",

    clusteredIndexInsert:  imageBasePath + "clustered_index_insert.png",

    clusteredIndexScan:  imageBasePath + "clustered_index_scan.png",

    clusteredIndexSeek:  imageBasePath + "clustered_index_seek.png",

    clusteredIndexUpdate:  imageBasePath + "clustered_index_update.png",

    clusteredIndexMerge:  imageBasePath + "clustered_index_merge.png",

    clusteredUpdate:  imageBasePath + "clustered_update.png",

    collapse:  imageBasePath + "collapse.png",

    computeScalar:  imageBasePath + "compute_scalar.png",

    concatenation:  imageBasePath + "concatenation.png",

    constantScan:  imageBasePath + "constant_scan.png",

    deletedScan:  imageBasePath + "deleted_scan.png",

    filter:  imageBasePath + "filter.png",

    hashMatch:  imageBasePath + "hash_match.png",

    indexDelete:  imageBasePath + "index_delete.png",

    indexInsert:  imageBasePath + "index_insert.png",

    indexScan:  imageBasePath + "index_scan.png",

    columnstoreIndexDelete:  imageBasePath + "columnstore_index_delete.png",

    columnstoreIndexInsert:  imageBasePath + "columnstore_index_insert.png",

    columnstoreIndexMerge:  imageBasePath + "columnstore_index_merge.png",

    columnstoreIndexScan:  imageBasePath + "columnstore_index_scan.png",

    columnstoreIndexUpdate:  imageBasePath + "columnstore_index_update.png",

    indexSeek:  imageBasePath + "index_seek.png",

    indexSpool:  imageBasePath + "index_spool.png",

    indexUpdate:  imageBasePath + "index_update.png",

    insertedScan:  imageBasePath + "inserted_scan.png",

    logRowScan:  imageBasePath + "log_row_scan.png",

    mergeInterval:  imageBasePath + "merge_interval.png",

    mergeJoin:  imageBasePath + "merge_join.png",

    nestedLoops:  imageBasePath + "nested_loops.png",

    parallelism:  imageBasePath + "parallelism.png",

    parameterTableScan:  imageBasePath + "parameter_table_scan.png",

    print:  imageBasePath + "print.png",

    rank:  imageBasePath + "rank.png",

    foreignKeyReferencesCheck:  imageBasePath + "foreign_key_references_check.png",

    remoteDelete:  imageBasePath + "remote_delete.png",

    remoteIndexScan:  imageBasePath + "remote_index_scan.png",

    remoteIndexSeek:  imageBasePath + "remote_index_seek.png",

    remoteInsert:  imageBasePath + "remote_insert.png",

    remoteQuery:  imageBasePath + "remote_query.png",

    remoteScan:  imageBasePath + "remote_scan.png",

    remoteUpdate:  imageBasePath + "remote_update.png",

    ridLookup:  imageBasePath + "rid_lookup.png",

    rowCountSpool:  imageBasePath + "row_count_spool.png",

    segment:  imageBasePath + "segment.png",

    sequence:  imageBasePath + "sequence.png",

    sequenceProject:  imageBasePath + "sequence_project.png",

    sort:  imageBasePath + "sort.png",

    split:  imageBasePath + "split.png",

    streamAggregate:  imageBasePath + "stream_aggregate.png",

    switchStatement:  imageBasePath + "switch.png",

    tableValuedFunction:  imageBasePath + "table_valued_function.png",

    tableDelete:  imageBasePath + "table_delete.png",

    tableInsert:  imageBasePath + "table_insert.png",

    tableScan:  imageBasePath + "table_scan.png",

    tableSpool:  imageBasePath + "table_spool.png",

    tableUpdate:  imageBasePath + "table_update.png",

    tableMerge:  imageBasePath + "table_merge.png",

    tfp:  imageBasePath + "predict.png",

    top:  imageBasePath + "top.png",

    udx:  imageBasePath + "udx.png",

    batchHashTableBuild:  imageBasePath + "batch_hash_table_build.png",

    windowSpool:  imageBasePath + "table_spool.png",

    windowAggregate:  imageBasePath + "window_aggregate.png",

    // cursor operators
    fetchQuery:  imageBasePath + "fetch_query.png",

    populateQuery:  imageBasePath + "population_query.png",

    refreshQuery:  imageBasePath + "refresh_query.png",

    // shiloh operators
    result:  imageBasePath + "result.png",

    aggregate:  imageBasePath + "aggregate.png",

    assign:  imageBasePath + "assign.png",

    arithmeticExpression:  imageBasePath + "arithmetic_expression.png",

    bookmarkLookup:  imageBasePath + "bookmark_lookup.png",

    convert:  imageBasePath + "convert.png",

    declare:  imageBasePath + "declare.png",

    deleteOperator:  imageBasePath + "delete.png",

    dynamic:  imageBasePath + "dynamic.png",
    
    hashMatchRoot:  imageBasePath + "hash_match_root.png",

    hashMatchTeam:  imageBasePath + "hash_match_team.png",

    ifOperator:  imageBasePath + "if.png",

    insert:  imageBasePath + "insert.png",

    intrinsic:  imageBasePath + "intrinsic.png",

    keyset:  imageBasePath + "keyset.png",

    locate:  imageBasePath + "locate.png",

    populationQuery:  imageBasePath + "population_query.png",

    setFunction:  imageBasePath + "set_function.png",

    snapshot:  imageBasePath + "snapshot.png",

    spool:  imageBasePath + "spool.png",

    tsql:  imageBasePath + "sql.png",

    update:  imageBasePath + "update.png",

    // fake operators
    keyLookup:  imageBasePath + "bookmark_lookup.png",

    // PDW operators
    apply:  imageBasePath + "apply.png",

    broadcast:  imageBasePath + "broadcast.png",

    computeToControlNode:  imageBasePath + "compute_to_control_node.png",

    constTableGet:  imageBasePath + "const_table_get.png",

    controlToComputeNodes:  imageBasePath + "control_to_compute_nodes.png",

    externalBroadcast:  imageBasePath + "external_broadcast.png",

    externalExport:  imageBasePath + "external_export.png",

    externalLocalStreaming:  imageBasePath + "external_local_streaming.png",

    externalRoundRobin:  imageBasePath + "external_round_robin.png",

    externalShuffle:  imageBasePath + "external_shuffle.png",
    
    get:  imageBasePath + "get.png",

    groupByApply:  imageBasePath + "apply.png",
    
    groupByAggregate:  imageBasePath + "group_by_aggregate.png",

    join:  imageBasePath + "join.png",

    localCube:  imageBasePath + "intrinsic.png",

    project:  imageBasePath + "project.png",

    shuffle:  imageBasePath + "shuffle.png",

    singleSourceRoundRobin:  imageBasePath + "single_source_round_robin.png",

    singleSourceShuffle:  imageBasePath + "single_source_shuffle.png",

    trim:  imageBasePath + "trim.png",

    union:  imageBasePath + "union.png",

    unionAll:  imageBasePath + "union_all.png"
};

function azdataQueryPlan(container, queryPlanGraph)
{
    this.queryPlanGraph = queryPlanGraph;
	if (container != null)
	{
		this.init(container);
	}

    // this.traverse(this.queryPlanGraph);
};

// azdataQueryPlan.prototype.buildGraph = function(root)
// {
//     var laneHeight = 40;
//     var lane = 0;
//     var positions = new Array();
//     var stack = [ root ];
//     while (stack.length > 0)
//     {
//         var node = stack.pop();
//         if (node.children)
//         {
//             for (var i = 0; i < node.children.length; ++i)
//             {  
//                 var childNode = node.children[i];
//                 stack.push(childNode);
//             }
//         }
//     }
// }

azdataQueryPlan.prototype.populateGraph = function()
{
    
}

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
    graph.panningHandler.useLeftButtonForPanning = true;
	graph.setTooltips(true);
	graph.setAllowDanglingEdges(false); 

    graph.setDropEnabled(false);
	graph.setSplitEnabled(false);

    // var model = graph.getModel();

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

    // Applies size changes to siblings and parents
    // new mxSwimlaneManager(graph);
    // Creates a stack depending on the orientation of the swimlane
    // var layout = new mxStackLayout(graph, false);
    //var layout = new mxCompactTreeLayout(graph, true);

    //var layout = new azdataTreeLayout(graph, true);
    var layout = new mxHierarchicalLayout(graph, mxConstants.DIRECTION_WEST);


    // var layout = new mxHierarchicalLayout(graph);
    // var organic = new mxFastOrganicLayout(graph);
    // organic.forceConstant = 120;


    //layout.resizeParent = true;			
    // Applies the size to children if parent size changes
    //layout.fill = true;
    // Keeps the lanes and pools stacked
    // var layoutMgr = new mxLayoutManager(graph);
    // layoutMgr.getLayout = function(cell)
    // {
    //     //if (!model.isEdge(cell) && graph.getModel().getChildCount(cell) > 0 && cell.value && cell.value.indexOf && cell.value.indexOf('Lane') < 0) { // &&
    //     // //    (model.getParent(cell) == model.getRoot() || graph.isPool(cell)))
    //     // if (cell.style === 'swimlane')
    //     // {
    //     // //     layout.fill = graph.isPool(cell);
    //     if (model.getParent(cell) == model.getRoot()) {
    //           return layout;
    //     }
    //     return layout2;
    // };

    var style = new Object();
    style = mxUtils.clone(style);
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
    style[mxConstants.STYLE_STROKECOLOR] = '#000000';
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;
    style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_CENTER;
    style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;
    style[mxConstants.STYLE_SPACING_TOP] = '34';
    style[mxConstants.STYLE_LABEL_POSITION] = 'bottom';
    

    var icons = new Array();
    for (const iconName in azdataQueryPlanIconPaths) 
    {
        console.log(iconName + ' - ' + azdataQueryPlanIconPaths[iconName]);
        style = mxUtils.clone(style);
        style[mxConstants.STYLE_IMAGE] = azdataQueryPlanIconPaths[iconName];
        graph.getStylesheet().putCellStyle('azdataQueryplan-' + iconName, style);
        icons.push(iconName);
    }

    // style = graph.getStylesheet().getDefaultVertexStyle();
    // style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
    // style[mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
    // style[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';
    // style[mxConstants.STYLE_FONTSIZE] = 11;
    // style[mxConstants.STYLE_STARTSIZE] = 22;
    // style[mxConstants.STYLE_HORIZONTAL] = false;
    // style[mxConstants.STYLE_FONTCOLOR] = 'black';
    // style[mxConstants.STYLE_STROKECOLOR] = 'black';
    // delete style[mxConstants.STYLE_FILLCOLOR];
    // graph.getStylesheet().putCellStyle('swimlane', style);

    var nodeInitialX = 0;
    var nodeInitialY = 0;
    var nodeWidth = 32;
    var nodeHeight = 32;

    graph.getModel().beginUpdate();
    try
    {
        // var lane1a = graph.insertVertex(parent, null, '', 0, 0, 640, 110, 'swimlane');
		// lane1a.setConnectable(false);
        // var lane1b = graph.insertVertex(parent, null, 'Lane B', 0, 0, 640, 110, 'swimlane');
		// lane1b.setConnectable(false);
        // var lane1c = graph.insertVertex(parent, null, 'Lane C', 0, 0, 640, 110, 'swimlane');
		// lane1c.setConnectable(false);

        var rand = Math.floor((Math.random() * icons.length));
        var vertex = graph.insertVertex(parent, null, this.queryPlanGraph, nodeInitialX, nodeInitialY, nodeWidth, nodeHeight, 'azdataQueryplan-' +  icons[rand]);
        vertex.setConnectable(false);
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
                    rand = Math.floor((Math.random() * icons.length));
                    var node = entry.node.children[i];

                    // nodeInitialX = Math.floor((Math.random() * 1000) + 1);
                    // nodeInitialY = Math.floor((Math.random() * 1000) + 1);
          
                    vertex = graph.insertVertex(parent, null, node, nodeInitialX, nodeInitialY, nodeWidth, nodeHeight, 'azdataQueryplan-' + icons[rand]);
                    vertex.setConnectable(false);
                    graph.insertEdge(parent, null, '', entry.vertex, vertex);
                    stack.push(
                        { 
                            vertex: vertex,
                            node: node
                        });
                }
            }
        }

        // create vertexes
        // updateVertexPositions
        // addEdges
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
