<template>
    <form class="w-100">
        <Card>
            <Input inputType="email" label="Email" class="mb3"/>
            <Input inputType="password" label="Password" class="mb4"/>
            <Button class="mb3">Login</Button>
            <Checkbox :options="remember.options"/>
        </Card>
    </form>
</template>

<script>
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'

export default {
    data() {
        return {
            remember: {
                options: [
                    { name: 'remember', label: 'Remember Me', value: false },
                ]
            }
        }
    },
    components: {
        Card,
        Input,
        Button,
        Checkbox
    }
}
</script>