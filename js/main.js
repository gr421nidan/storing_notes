Vue.component('formx', {
    template:
    `
    <div class="content">
    <div class="left-column-wrapper">
        <div class="left-column">
            <br>
            <form>
                <div>
                    <label>Заголовок</label>
                    <input type="text" placeholder="Введите название">
                </div>
                <div>
                    <label>Выберите пункты</label>
                    <input type="checkbox" name="1" class="button">
                    <span>1</span>
                    <input type="checkbox" name="2" class="button">
                    <span>1</span>
                    <input type="checkbox" name="3" class="button">
                    <span>1</span>
                    <input type="checkbox" name="4" class="button">
                    <span>1</span>
                    <input type="checkbox" name="5" class="button">
                    <span>1</span>
                    <div>
                        <input type="submit">
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

});

let app = new Vue({
    el: '#app'
})