var map = new BMap.Map("container");            // 创建地图实例  
var point = new BMap.Point(116.404, 39.915);    // 创建点坐标  
map.centerAndZoom(point, 12);                   // 初始化地图，设置中心点坐标和地图级别  
// map.addControl(new BMap.NavigationControl());
// map.addControl(new BMap.ScaleControl());

map.enableScrollWheelZoom();                    // 启动鼠标滚轮缩放地图

setTimeout(function() {                         // 删除版权信息
    $('.anchorBL').fadeOut(2000);
}, 1000)

// var ctrl = new BMapLib.TrafficControl();        // 添加路况信息控件
// map.addControl(ctrl);