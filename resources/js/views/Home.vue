<template lang="html">
    <div class="fattura">
        <div class="fattura-headcolor"></div>
        <div class="fattura-inner">
            <div class="fattura-content">
                <h1>Crea Fattura</h1>
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" name="name" value="" class="form-control">
                </div>
                <div class="form-group">
                    <label for="name">P.IVA</label>
                    <input type="text" name="name" value="" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
@import '~styles/shared';

.fattura {
    @include make-container();

    .fattura-headcolor {
        @include make-row();
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 300px;
        @include gradient-directional($blue, $teal, 170deg);
    }

    .fattura-inner {
        @include make-row();
        justify-content: center;

        .fattura-content {
            @include make-col(8);
            @include border-radius($spacer / 2);
            @include box-shadows($gray-500);
            min-height: 300px;
            background-color: $gray-200;
            margin-top: $spacer * 4;
            padding: $spacer * 2;

            h1 {
                font-variant: small-caps;
                font-weight: 600;
            }
        }
    }
}

</style>
