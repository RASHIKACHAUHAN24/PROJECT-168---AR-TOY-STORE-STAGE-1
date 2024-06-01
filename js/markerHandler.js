AFRAME.registerComponent("marker-handler",{
    init:function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var btnDiv = document.getElementById("button-div")
        btnDiv.style.display = "flex"
        var orderBtn = document.getElementById("order-button")
        var rateBtn = document.getElementById("summary-button")
        rateBtn.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"ORDER SUMMARY",
                text:"Work in progress."
            })
        })
        orderBtn.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"ORDER NOW",
                text:"Thank you for your order."
            })
        })

        
    },

    handleMarkerLost:function(){
        var btnDiv = document.getElementById("button-div")
        btnDiv.style.display = "none"
    }
})

