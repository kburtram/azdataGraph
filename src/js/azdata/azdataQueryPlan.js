function azdataQueryPlan()
{
    console.log('constr');
};

azdataQueryPlan.prototype.zIndex = 10005;
 
azdataQueryPlan.prototype.isEnabled = function()
{
    return this.zIndex;
};
 
azdataQueryPlan.prototype.init = function()
{
    console.log('init called')
};
