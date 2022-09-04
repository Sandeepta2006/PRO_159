AFRAME.registerComponent('info-banner', {
    schema: {
        itemId: {default: '', type: 'string'}
    },

    update: function(){
        this.createBanner();
    },

    createBanner: function(){
        postersInfo = {
            '7fates-chakho': {
                bannerUrl : './Assets/banners/7fates_chakho_bn.png',
                title: '7-FATES CHAKHO',
                releasedYear : '2022',
                description : 'It chronicles the story of seven boys who are connected by fate as they battle hardships together and grow up in the process. With their fates deeply intertwined with the tiger, the seven members create a tiger hunting team called Chakho, and they face the world together.'
            },
            'true-beauty': {
                bannerUrl: './Assets/banners/true_beauty_bn.png',
                title: 'TRUE BEAUTY',
                releasedYear: '2020',
                description: 'It centers on a young woman who mastered the art of makeup in her teenage years in order to transform herself into a gorgeous "goddess" after being bullied and discriminated because of being perceived as ugly.'
            },
            'spyxfamily': {
                bannerUrl: '/Assets/banners/spy_x_family_bn.png',
                title: 'SPY X FAMILY',
                releasedYear: '2019',
                description: 'The story follows a spy who has to "build a family" to execute a mission, not realizing that the girl he adopts as his daughter is a telepath, and the woman he agrees to be in a marriage with is a skilled assassin.'
            },
            'noblesse': {
                bannerUrl: './Assets/banners/noblesse_bn.png',
                title: 'NOBLESSE',
                releasedYear: '2007',
                description: "Noblesse is about a powerful noble, Cadis Etrama Di Raizel (referred to as Rai), who has been asleep for 820 years with no knowledge of mankind's advancement and scientific successes."
            }
        }

        const {itemId} = this.data

        const fadeBackground = document.querySelector('#fadeBackground')

        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('id', `${itemId}-banner`)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 0.9,
            height: 1
        })
        entity.setAttribute('material', {color: 'white'})
        entity.setAttribute('position', {x: 0, y:0, z: -1})

        const item = postersInfo[itemId]

        const image = this.createImage(item)
        const title = this.createTitle(item)
        const description = this.createDescription(item)

        entity.appendChild(image)
        entity.appendChild(title)
        entity.appendChild(description)

        fadeBackground.appendChild(entity)
    },

    createImage: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 0.8,
            height: 0.9
        })
        entity.setAttribute('material', {src: item.bannerUrl})
        entity.setAttribute('position', {x:0, y:0, z: 0.05})
        return entity
    },

    createTitle: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2bold',
            width: 1,
            height: 2,
            color: 'white',
            value: `${item.title} (${item.releasedYear})`
        })
        entity.setAttribute('position', {x:-0.5, y:0.02, z:0.05})
        return entity
    },

    createDescription: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2semibold',
            width: 0.75,
            height: 5,
            color: 'white',
            value: item.description
        })
        entity.setAttribute('position', {x:-0.9, y:-0.25, z:0.05})
        return entity
    }
})