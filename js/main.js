Vue.component('forma', {
    template:
    `
   
  <div class="content">
    <div class="left-column-wrapper">
        <div class="left-column">
            <br>
             <form class="form_add_note">
            
<!--                <p>{{note}}</p>-->
            <div>
                
                <input v-model="note" type="text" placeholder="Введите название"/>
            </div>
                <div>
                <label>Выберите:</label>
                <input v-model="note" type="checkbox">  
                <input v-model="note" type="checkbox"> 
                <input v-model="note" type="checkbox"> 
                <input v-model="note" type="checkbox">
                <input v-model="note" type="checkbox">  
                </div>
                  <button @click="addNote">Создать</button>
                  <div class="card">
                    <div v-for="(note, i) in notes" :key="i" >
                    <span>{{i+1}}</span>
                    <span>{{note}}</span>
                    </div>
                   </div>
                  
             </form>
        </div>
    </div>

    <div class="middle-column-wrapper">
        <div class="middle-column">
    <p>middle</p>
        </div>
    </div>

    <div class="right-column-wrapper">
        <div class="right-column">
            <p>right</p>
        </div>
    </div>
</div>`,
    data(){
        return{
            note: "",
            notes: [],

        };
    },
    methods: {
        addNote() {
            if(this.note !== ''){
                this.notes.push(this.note);
            }

            localStorage.setItem('notes', JSON.stringify(this.notes))
            this.note=''
        },


    },
    async mounted() {
        const data = await localStorage.getItem('notes')
        if (data){
            this.notes = JSON.parse(data)
        }

    }
});

let app = new Vue({
    el: '#app'
})