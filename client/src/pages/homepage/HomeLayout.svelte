<script>
    import './basic-layout.css';
    import logo from '../../assets/logo.svg';
</script>

<div class="homepage">
    <div class="logo">
        {@html logo}
    </div>
    <div class="form">
        <slot/>
    </div>
</div>
